using RentNDeliver.Application.Motorcycles.Queries;

namespace RentNDeliver.Application.Tests.Motorcycles
{
    public class MotorcycleListItemDtoTests
    {
        [Fact]
        public void Constructor_ShouldInitializeProperties()
        {
            // Arrange
            var id = Guid.NewGuid();
            var licensePlate = "XYZ1234";
            var model = "Harley-Davidson";
            var year = 2020;
            var createdDate = DateTime.UtcNow;
            DateTime? lastUpdatedDate = DateTime.UtcNow.AddDays(1);

            // Act
            var dto = new MotorcycleListItemDto(id, licensePlate, model, year, createdDate, lastUpdatedDate);

            // Assert
            Assert.Equal(id, dto.Id);
            Assert.Equal(licensePlate, dto.LicensePlate);
            Assert.Equal(model, dto.Model);
            Assert.Equal(year, dto.Year);
            Assert.Equal(createdDate, dto.CreatedDate);
            Assert.Equal(lastUpdatedDate, dto.LastUpdatedDate);
        }

        [Fact]
        public void Constructor_ShouldHandleNullLastUpdatedDate()
        {
            // Arrange
            var id = Guid.NewGuid();
            var licensePlate = "XYZ1234";
            var model = "Harley-Davidson";
            var year = 2020;
            var createdDate = DateTime.UtcNow;
            DateTime? lastUpdatedDate = null;

            // Act
            var dto = new MotorcycleListItemDto(id, licensePlate, model, year, createdDate, lastUpdatedDate);

            // Assert
            Assert.Equal(id, dto.Id);
            Assert.Equal(licensePlate, dto.LicensePlate);
            Assert.Equal(model, dto.Model);
            Assert.Equal(year, dto.Year);
            Assert.Equal(createdDate, dto.CreatedDate);
            Assert.Null(dto.LastUpdatedDate);
        }
    }
}