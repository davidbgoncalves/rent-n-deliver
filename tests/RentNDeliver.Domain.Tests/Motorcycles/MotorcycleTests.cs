using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Domain.Tests.Motorcycles
{
    public class MotorcycleTests
    {
        [Fact]
        public void Create_ShouldReturnSuccess_WhenParametersAreValid()
        {
            // Arrange
            int validYear = 2020;
            string validModel = "Harley-Davidson";
            string validLicensePlate = "XYZ1234";

            // Act
            var result = Motorcycle.Create(validYear, validModel, validLicensePlate);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.NotNull(result.Value);
            Assert.Equal(validYear, result.Value.Year);
            Assert.Equal(validModel, result.Value.Model);
            Assert.Equal(validLicensePlate, result.Value.LicensePlate);
            Assert.Equal(DateTime.UtcNow.Date, result.Value.CreatedAt.Date);
        }

        [Fact]
        public void Create_ShouldReturnFailure_WhenYearIsInvalid()
        {
            // Arrange
            int invalidYear = 1800;
            string validModel = "Harley-Davidson";
            string validLicensePlate = "XYZ1234";

            // Act
            var result = Motorcycle.Create(invalidYear, validModel, validLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Year must be greater than 1885", result.Error);
        }

        [Fact]
        public void Create_ShouldReturnFailure_WhenModelIsNull()
        {
            // Arrange
            int validYear = 2020;
            string invalidModel = null!;
            string validLicensePlate = "XYZ1234";

            // Act
            var result = Motorcycle.Create(validYear, invalidModel, validLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Model cannot be null or empty", result.Error);
        }

        [Fact]
        public void Create_ShouldReturnFailure_WhenModelIsEmpty()
        {
            // Arrange
            int validYear = 2020;
            string invalidModel = "";
            string validLicensePlate = "XYZ1234";

            // Act
            var result = Motorcycle.Create(validYear, invalidModel, validLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Model cannot be null or empty", result.Error);
        }

        [Fact]
        public void Create_ShouldReturnFailure_WhenLicensePlateIsNull()
        {
            // Arrange
            int validYear = 2020;
            string validModel = "Harley-Davidson";
            string invalidLicensePlate = null!;

            // Act
            var result = Motorcycle.Create(validYear, validModel, invalidLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("License Plate cannot be null or empty", result.Error);
        }

        [Fact]
        public void Create_ShouldReturnFailure_WhenLicensePlateIsEmpty()
        {
            // Arrange
            int validYear = 2020;
            string validModel = "Harley-Davidson";
            string invalidLicensePlate = "";

            // Act
            var result = Motorcycle.Create(validYear, validModel, invalidLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("License Plate cannot be null or empty", result.Error);
        }
        
        [Fact]
        public void PrivateConstructor_ShouldNotThrowException()
        {
            // Arrange & Act
            var motorcycle = Activator.CreateInstance(typeof(Motorcycle), nonPublic: true);

            // Assert
            Assert.NotNull(motorcycle);
        }
        
        [Fact]
        public void UpdateLicensePlate_ShouldReturnSuccess_WhenLicensePlateIsValid()
        {
            // Arrange
            var motorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            string newLicensePlate = "ABC5678";

            // Act
            var result = motorcycle!.UpdateLicensePlate(newLicensePlate);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(newLicensePlate, motorcycle.LicensePlate);
            Assert.Equal(DateTime.UtcNow.Date, motorcycle.UpdateAt?.Date);
        }

        [Fact]
        public void UpdateLicensePlate_ShouldReturnFailure_WhenLicensePlateIsNull()
        {
            // Arrange
            var motorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            string invalidLicensePlate = null!;

            // Act
            var result = motorcycle!.UpdateLicensePlate(invalidLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("License Plate cannot be null or empty", result.Error);
        }

        [Fact]
        public void UpdateLicensePlate_ShouldReturnFailure_WhenLicensePlateIsEmpty()
        {
            // Arrange
            var motorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            string invalidLicensePlate = "";

            // Act
            var result = motorcycle!.UpdateLicensePlate(invalidLicensePlate);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("License Plate cannot be null or empty", result.Error);
        }

        [Fact]
        public void Create_ShouldSetUpdateAtToNull_WhenMotorcycleIsCreated()
        {
            // Arrange
            int validYear = 2020;
            string validModel = "Harley-Davidson";
            string validLicensePlate = "XYZ1234";

            // Act
            var result = Motorcycle.Create(validYear, validModel, validLicensePlate);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Null(result.Value!.UpdateAt);
        }
    }
}