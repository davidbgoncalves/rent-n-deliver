using System.Text;
using RabbitMQ.Client;
using RentNDeliver.Application.Abstractions.Messaging;

namespace RentNDeliver.Infrastructure.Services.Messaging;

public class RabbitMqPublisher : IMessagePublisher
{
    private readonly IConnectionFactory _connectionFactory;

    public RabbitMqPublisher(IConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }
    
    public Task PublishAsync(string message)
    {
        using var connection = _connectionFactory.CreateConnection();
        using var channel = connection.CreateModel();
        channel.QueueDeclare(queue: "motorcycleQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
        var body = Encoding.UTF8.GetBytes(message);
        channel.BasicPublish(exchange: "", routingKey: "motorcycleQueue", basicProperties: null, body: body);
        return Task.CompletedTask;
    }
}