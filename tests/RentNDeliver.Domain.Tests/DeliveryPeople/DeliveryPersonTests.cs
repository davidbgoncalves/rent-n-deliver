using RentNDeliver.Domain.DeliveryPeople;


namespace RentNDeliver.Domain.Tests.DeliveryPeople
{
    public class DeliveryPersonTests
    {
        [Fact]
        public void Create_ValidDeliveryPerson_ShouldReturnSuccess()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = "12345678901234";
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = "1234567890";
            var cnhType = "A";
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.NotNull(result.Value);
            Assert.Equal(name, result.Value.Name);
            Assert.Equal(cnpj, result.Value.Cnpj);
            Assert.Equal(birthDate, result.Value.BirthDate);
            Assert.Equal(cnhNumber, result.Value.CnhNumber);
            Assert.Equal(cnhType, result.Value.CnhType);
        }

        [Fact]
        public void Create_InvalidCnhType_ShouldReturnFailure()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = "12345678901234";
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = "1234567890";
            var cnhType = "C"; // Invalid CNH Type
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Invalid CNH Type, you must inform A, B or AB", result.Error);
        }

        [Fact]
        public void Create_InvalidBirthDate_ShouldReturnFailure()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = "12345678901234";
            var birthDate = DateTime.MinValue; // Invalid birthdate
            var cnhNumber = "1234567890";
            var cnhType = "A";
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Birthdate is required", result.Error);
        }

        [Fact]
        public void Create_BlankName_ShouldReturnFailure()
        {
            // Arrange
            var name = ""; // Blank name
            var cnpj = "12345678901234";
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = "1234567890";
            var cnhType = "A";
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Name is required", result.Error);
        }

        [Fact]
        public void Create_BlankCnpj_ShouldReturnFailure()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = ""; // Blank CNPJ
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = "1234567890";
            var cnhType = "A";
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("CNPJ is required", result.Error);
        }

        [Fact]
        public void Create_BlankCnhNumber_ShouldReturnFailure()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = "12345678901234";
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = ""; // Blank CNH Number
            var cnhType = "A";
            string cnhImageUrl = "http://localh";

            // Act
            var result = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("CNH Number is required", result.Error);
        }

        [Fact]
        public void SetCnhImageUrl_ShouldUpdateCnhImageUrlAndUpdatedAt()
        {
            // Arrange
            var name = "John Doe";
            var cnpj = "12345678901234";
            var birthDate = new DateTime(1990, 1, 1);
            var cnhNumber = "1234567890";
            var cnhType = "A";
            string cnhImageUrl = "http://localh";
            var deliveryPerson = DeliveryPerson.Create(name, cnpj, birthDate, cnhNumber, cnhType, cnhImageUrl).Value;

            var newCnhImageUrl = "http://example.com/cnh.jpg";

            // Act
            deliveryPerson!.SetCnhImageUrl(newCnhImageUrl);

            // Assert
            Assert.Equal(newCnhImageUrl, deliveryPerson.CnhImageUrl);
            Assert.True(deliveryPerson.UpdatedAt > deliveryPerson.CreatedAt);
        }
    }
}
