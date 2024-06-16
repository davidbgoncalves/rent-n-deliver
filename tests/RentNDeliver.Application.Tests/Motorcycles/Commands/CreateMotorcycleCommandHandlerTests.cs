using Moq;
using RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Tests.Motorcycles.Commands
{
    public class CreateMotorcycleCommandHandlerTests
    {
        private readonly Mock<IMotorcycleRepository> _motorcycleRepositoryMock;
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly CreateMotorcycleCommandHandler _handler;

        public CreateMotorcycleCommandHandlerTests()
        {
            _motorcycleRepositoryMock = new Mock<IMotorcycleRepository>();
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _handler = new CreateMotorcycleCommandHandler(_motorcycleRepositoryMock.Object, _unitOfWorkMock.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnSuccess_WhenParametersAreValid()
        {
            // Arrange
            var command = new CreateMotorcycleCommand(2020, "Harley-Davidson", "XYZ1234");
            _motorcycleRepositoryMock.Setup(r => r.GetByLicensePlateAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync((Motorcycle)null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.True(result.IsSuccess);
            _motorcycleRepositoryMock.Verify(r => r.AddAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Once);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenYearIsInvalid()
        {
            // Arrange
            var command = new CreateMotorcycleCommand(1800, "Harley-Davidson", "XYZ1234");

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Year must be greater than 1885", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.AddAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenModelIsInvalid()
        {
            // Arrange
            var command = new CreateMotorcycleCommand(2020, null!, "XYZ1234");

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Model cannot be null or empty", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.AddAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenLicensePlateIsInvalid()
        {
            // Arrange
            var command = new CreateMotorcycleCommand(2020, "Harley-Davidson", null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("License Plate cannot be null or empty", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.AddAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenLicensePlateIsDuplicated()
        {
            // Arrange
            var command = new CreateMotorcycleCommand(2020, "Harley-Davidson", "XYZ1234");
            var existingMotorcycle = Motorcycle.Create(2020, "Yamaha", "XYZ1234").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByLicensePlateAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("There is already a motorcycle registered with this License Plate", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.AddAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
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