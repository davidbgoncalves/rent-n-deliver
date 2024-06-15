using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using RentNDeliver.Domain.Motorcycles;
using System.Text;
using System.Text.Json;
using RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;

namespace RentNDeliver.Web.BackgroundServices;

public class RabbitMqConsumer(
    ILogger<RabbitMqConsumer> logger,
    IConnectionFactory connectionFactory,
    IServiceProvider serviceProvider)
    : BackgroundService
{
    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var connection = connectionFactory.CreateConnection();
        var channel = connection.CreateModel();
        channel.QueueDeclare(queue: "motorcycleQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += async (model, ea) =>
        {
            logger.LogInformation($"Message received at consumer");
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            var motorcycleCreatedEvent = JsonSerializer.Deserialize<MotorcycleCreatedEvent>(message);
            if (motorcycleCreatedEvent == null)
            {
                logger.LogInformation($"Message there is no content.");
                return;
            }
            logger.LogInformation($"Message contains MotorcycleId:{motorcycleCreatedEvent.MotorcycleId}, Year {motorcycleCreatedEvent.Year}.");
            if (motorcycleCreatedEvent is { Year: 2024 })
            {
                await LogMotorcycleAsync(motorcycleCreatedEvent);
            }
        };
        channel.BasicConsume(queue: "motorcycleQueue", autoAck: true, consumer: consumer);
        return Task.CompletedTask;
    }

    private async Task LogMotorcycleAsync(MotorcycleCreatedEvent motorcycleCreatedEvent)
    {
        using var scope = serviceProvider.CreateScope();
        var mongoDbContext = scope.ServiceProvider.GetRequiredService<MongoDbContext>();
        var log = new MotorcycleCreatedEventLog()
        {
            Id = Guid.NewGuid().ToString(),
            MotorcycleId = motorcycleCreatedEvent.MotorcycleId.ToString(),
            Year = motorcycleCreatedEvent.Year,
            CreatedAt = DateTime.UtcNow
        };
        await mongoDbContext.MotorcycleLogs.InsertOneAsync(log);
        logger.LogInformation($"Message of MotorcycleId:{motorcycleCreatedEvent.MotorcycleId}, Year {motorcycleCreatedEvent.Year} registered in database.");
    }
}