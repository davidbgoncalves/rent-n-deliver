using MediatR;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RentNDeliver.Application.Abstractions.Messaging;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Events;

public sealed class MotorcycleCreatedEventHandler(
    ILogger<MotorcycleCreatedEventHandler> logger,
    IMessagePublisher messagePublisher)
    : INotificationHandler<MotorcycleCreatedEvent>
{
    public async Task Handle(MotorcycleCreatedEvent notification, CancellationToken cancellationToken)
    {
        logger.LogInformation("MotorcycleCreatedEvent was received.");

        var messageToSend = JsonConvert.SerializeObject(notification);
        
        await messagePublisher.PublishAsync(messageToSend);
        
        logger.LogInformation("MotorcycleCreatedEvent was published to message bus.");
    }
}