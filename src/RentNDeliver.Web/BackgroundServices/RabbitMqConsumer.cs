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
        try
        {
            var connection = connectionFactory.CreateConnection();
            var channel = connection.CreateModel();
            
            channel.QueueDeclare(queue: "motorcycleQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
            
            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += async (model, ea) =>
            {
                bool messageProcessedSuccessfully = false;

                try
                {
                    logger.LogInformation($"Message received at consumer");
                    
                    var body = ea.Body.ToArray();
                    var message = Encoding.UTF8.GetString(body);
                    var motorcycleCreatedEvent = JsonSerializer.Deserialize<MotorcycleCreatedEvent>(message);

                    if (motorcycleCreatedEvent != null)
                    {
                        logger.LogInformation($"Message contains MotorcycleId:{motorcycleCreatedEvent.MotorcycleId}, Year {motorcycleCreatedEvent.Year}.");
                        if (motorcycleCreatedEvent is { Year: 2024 })
                        {
                            await LogMotorcycleAsync(motorcycleCreatedEvent);
                        }
                    }
                    else
                    {
                        logger.LogInformation($"Message there is no content.");
                    }
                    messageProcessedSuccessfully = true;
                }
                catch (Exception e)
                {
                    logger.LogError(e, "3 - Was not possible to process the message, occurred an unexpected error");
                    Console.WriteLine(e);
                }
                finally
                {
                    if (messageProcessedSuccessfully)
                    {
                        channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
                    }
                    else
                    {
                        channel.BasicNack(deliveryTag: ea.DeliveryTag, multiple: false, requeue: true);
                    }
                }

            };
            
            channel.BasicConsume(queue: "motorcycleQueue", autoAck: false, consumer: consumer);
        }
        catch (Exception e)
        {
            logger.LogError(e, "1 - Was not possible to process the message, occurred an unexpected error");
        }
        
        return Task.CompletedTask;
    }

    private async Task LogMotorcycleAsync(MotorcycleCreatedEvent motorcycleCreatedEvent)
    {
        try
        {
            logger.LogInformation("Trying to insert data into MongoDb");
            
            using var scope = serviceProvider.CreateScope();
            var mongoDbContext = scope.ServiceProvider.GetRequiredService<MongoDbContext>();
            var log = new MotorcycleCreatedEventLog(
                Guid.NewGuid().ToString(),
                motorcycleCreatedEvent.MotorcycleId.ToString(), 
                motorcycleCreatedEvent.Year, 
                DateTime.UtcNow);
            await mongoDbContext.MotorcycleLogs.InsertOneAsync(log);
        
            logger.LogInformation($"Message of MotorcycleId:{motorcycleCreatedEvent.MotorcycleId}, Year {motorcycleCreatedEvent.Year} registered in database.");
        }
        catch (Exception e)
        {
            logger.LogError(e, "2 - Was not possible to process the message, occurred an unexpected error");
        }
    }
}