using Moq;
using RentNDeliver.Application.Motorcycles.Commands.UpdateMotorcycle;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;


namespace RentNDeliver.Application.Tests.Motorcycles.Commands
{
    public class UpdateMotorcycleCommandHandlerTests
    {
        private readonly Mock<IMotorcycleRepository> _motorcycleRepositoryMock;
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly UpdateMotorcycleCommandHandler _handler;

        public UpdateMotorcycleCommandHandlerTests()
        {
            _motorcycleRepositoryMock = new Mock<IMotorcycleRepository>();
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _handler = new UpdateMotorcycleCommandHandler(_motorcycleRepositoryMock.Object, _unitOfWorkMock.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnSuccess_WhenLicensePlateIsUpdated()
        {
            // Arrange
            var command = new UpdateMotorcycleCommand(Guid.NewGuid(), "ABC5678");
            var existingMotorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);
            _motorcycleRepositoryMock.Setup(r => r.GetByLicensePlateAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync((Motorcycle)null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.True(result.IsSuccess);
            _motorcycleRepositoryMock.Verify(r => r.UpdateAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Once);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenIdIsInvalid()
        {
            // Arrange
            var command = new UpdateMotorcycleCommand(Guid.Empty, "ABC5678");

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Id was not informed", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.UpdateAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenMotorcycleNotFound()
        {
            // Arrange
            var command = new UpdateMotorcycleCommand(Guid.NewGuid(), "ABC5678");
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync((Motorcycle)null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal($"Motorcycle not found with Id{command.Id.ToString()}", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.UpdateAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnSuccess_WhenLicensePlateIsTheSame()
        {
            // Arrange
            var command = new UpdateMotorcycleCommand(Guid.NewGuid(), "XYZ1234");
            var existingMotorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.True(result.IsSuccess);
            _motorcycleRepositoryMock.Verify(r => r.UpdateAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenLicensePlateIsDuplicated()
        {
            // Arrange
            var command = new UpdateMotorcycleCommand(Guid.NewGuid(), "ABC5678");
            var existingMotorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            var motorcycleWithSamePlate = Motorcycle.Create(2020, "Yamaha", "ABC5678").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);
            _motorcycleRepositoryMock.Setup(r => r.GetByLicensePlateAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(motorcycleWithSamePlate);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal($"There is another Motorcycle registered with the License Plate: {command.LicensePlate}", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.UpdateAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldThrowArgumentNullException_WhenCommandIsNull()
        {
            // Act & Assert
            await Assert.ThrowsAsync<ArgumentNullException>(() => _handler.Handle(null!, CancellationToken.None));
        }
    }
}