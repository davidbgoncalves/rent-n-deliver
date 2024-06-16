using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json;
using RentNDeliver.Application.Motorcycles.Events;
using RentNDeliver.Application.Abstractions.Messaging;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Tests.Motorcycles.Events
{
    public class MotorcycleCreatedEventHandlerTests
    {
        private readonly Mock<ILogger<MotorcycleCreatedEventHandler>> _loggerMock;
        private readonly Mock<IMessagePublisher> _messagePublisherMock;
        private readonly MotorcycleCreatedEventHandler _handler;

        public MotorcycleCreatedEventHandlerTests()
        {
            _loggerMock = new Mock<ILogger<MotorcycleCreatedEventHandler>>();
            _messagePublisherMock = new Mock<IMessagePublisher>();
            _handler = new MotorcycleCreatedEventHandler(_loggerMock.Object, _messagePublisherMock.Object);
        }

        [Fact]
        public async Task Handle_ShouldLogAndPublishEvent()
        {
            // Arrange
            var motorcycleCreatedEvent = new MotorcycleCreatedEvent(Guid.NewGuid(), 2020);
            var serializedEvent = JsonConvert.SerializeObject(motorcycleCreatedEvent);

            // Act
            await _handler.Handle(motorcycleCreatedEvent, CancellationToken.None);

            // Assert
            _loggerMock.Verify(
                x => x.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("MotorcycleCreatedEvent was received.")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception, string>>()!), 
                Times.Once);

            _messagePublisherMock.Verify(x => x.PublishAsync(serializedEvent), Times.Once);

            _loggerMock.Verify(
                x => x.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("MotorcycleCreatedEvent was published to message bus.")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception, string>>()!), 
                Times.Once);
        }
    }
}