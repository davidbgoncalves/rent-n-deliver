using RentNDeliver.Application.Motorcycles.Queries;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Tests.Motorcycles
{
    public class MotorcycleMappingExtensionsTests
    {
        [Fact]
        public void ToDto_ShouldMapMotorcycleToMotorcycleListItemDto()
        {
            // Arrange
            var motorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            motorcycle!.GetType().GetProperty("CreatedAt")?.SetValue(motorcycle, DateTime.UtcNow.AddDays(-1));
            motorcycle.GetType().GetProperty("UpdateAt")?.SetValue(motorcycle, DateTime.UtcNow);

            // Act
            var dto = motorcycle.ToDto();

            // Assert
            Assert.Equal(motorcycle.Id, dto.Id);
            Assert.Equal(motorcycle.LicensePlate, dto.LicensePlate);
            Assert.Equal(motorcycle.Model, dto.Model);
            Assert.Equal(motorcycle.Year, dto.Year);
            Assert.Equal(motorcycle.CreatedAt, dto.CreatedDate);
            Assert.Equal(motorcycle.UpdateAt, dto.LastUpdatedDate);
        }
    }
}