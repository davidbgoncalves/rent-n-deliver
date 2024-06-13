using RentNDeliver.Domain.Abstractions.Entities;
namespace RentNDeliver.Domain.Tests.Abstractions.Entities
{
    public class EntityBaseTests
    {
        [Fact]
        public void Constructor_WithId_ShouldSetId()
        {
            // Arrange
            Guid id = Guid.NewGuid();

            // Act
            var entity = new TestEntity(id);

            // Assert
            Assert.Equal(id, entity.Id);
        }

        [Fact]
        public void Constructor_WithoutId_ShouldNotSetId()
        {
            // Act
            var entity = new TestEntity();

            // Assert
            Assert.Equal(Guid.Empty, entity.Id);
        }

        // Test class to represent a concrete implementation of EntityBase for testing
        private class TestEntity : EntityBase
        {
            public TestEntity() : base()
            {
            }

            public TestEntity(Guid id) : base(id)
            {
            }
        }
    }
}
