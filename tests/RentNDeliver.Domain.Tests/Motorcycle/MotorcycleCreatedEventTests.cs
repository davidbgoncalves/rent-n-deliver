using RentNDeliver.Domain.Motorcycle;

namespace RentNDeliver.Domain.Tests.Motorcycle
{
    public class MotorcycleCreatedEventTests
    {
        [Fact]
        public void Constructor_ShouldSetProperties()
        {
            // Arrange
            Guid motorcycleId = Guid.NewGuid();

            // Act
            var motorcycleCreatedEvent = new MotorcycleCreatedEvent(motorcycleId);

            // Assert
            Assert.Equal(motorcycleId, motorcycleCreatedEvent.MotorcycleId);
        }
    }
}
