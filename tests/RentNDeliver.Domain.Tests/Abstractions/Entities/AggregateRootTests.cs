using RentNDeliver.Domain.Abstractions.DomainEvents;
using RentNDeliver.Domain.Abstractions.Entities;

namespace RentNDeliver.Domain.Tests.Abstractions.Entities
{
    public class AggregateRootTests
    {
        [Fact]
        public void Constructor_WithId_ShouldSetId()
        {
            // Arrange
            Guid id = Guid.NewGuid();

            // Act
            var aggregate = new TestAggregate(id);

            // Assert
            Assert.Equal(id, aggregate.Id);
        }

        [Fact]
        public void Constructor_WithoutId_ShouldGenerateNewId()
        {
            // Act
            var aggregate = new TestAggregate();

            // Assert
            Assert.NotEqual(Guid.Empty, aggregate.Id);
        }

        [Fact]
        public void AddDomainEvent_ShouldAddEvent()
        {
            // Arrange
            var aggregate = new TestAggregate();
            var domainEvent = new TestDomainEvent();

            // Act
            aggregate.AddDomainEvent(domainEvent);

            // Assert
            Assert.Single(aggregate.DomainEvents);
            Assert.Contains(domainEvent, aggregate.DomainEvents);
        }

        [Fact]
        public void ClearDomainEvents_ShouldClearEvents()
        {
            // Arrange
            var aggregate = new TestAggregate();
            var domainEvent = new TestDomainEvent();
            aggregate.AddDomainEvent(domainEvent);

            // Act
            aggregate.ClearDomainEvents();

            // Assert
            Assert.Empty(aggregate.DomainEvents);
        }

        // Test class to represent a concrete implementation of AggregateRoot for testing
        private class TestAggregate : AggregateRoot
        {
            public TestAggregate() : base()
            {
            }

            public TestAggregate(Guid id) : base(id)
            {
            }
        }

        // Test domain event class for testing
        private class TestDomainEvent : IDomainEvent
        {
            public Guid EventId { get; } = Guid.NewGuid();
            public DateTime OccurredOn { get; } = DateTime.UtcNow;
        }
    }
}


