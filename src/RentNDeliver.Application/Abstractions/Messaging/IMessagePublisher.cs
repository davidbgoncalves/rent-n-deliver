namespace RentNDeliver.Application.Abstractions.Messaging;

public interface IMessagePublisher
{
    Task PublishAsync(string message);
}