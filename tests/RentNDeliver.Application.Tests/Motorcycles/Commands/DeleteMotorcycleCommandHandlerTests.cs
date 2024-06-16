using Moq;
using RentNDeliver.Application.Motorcycles.Commands.DeleteMotorcycle;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Tests.Motorcycles.Commands
{
    public class DeleteMotorcycleCommandHandlerTests
    {
        private readonly Mock<IMotorcycleRepository> _motorcycleRepositoryMock;
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly DeleteMotorcycleCommandHandler _handler;

        public DeleteMotorcycleCommandHandlerTests()
        {
            _motorcycleRepositoryMock = new Mock<IMotorcycleRepository>();
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _handler = new DeleteMotorcycleCommandHandler(_motorcycleRepositoryMock.Object, _unitOfWorkMock.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnSuccess_WhenMotorcycleIsDeleted()
        {
            // Arrange
            var command = new DeleteMotorcycleCommand(Guid.NewGuid());
            var existingMotorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.True(result.IsSuccess);
            _motorcycleRepositoryMock.Verify(r => r.DeleteAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Once);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenIdIsInvalid()
        {
            // Arrange
            var command = new DeleteMotorcycleCommand(Guid.Empty);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Id was not informed", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.DeleteAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
            _unitOfWorkMock.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldReturnFailure_WhenMotorcycleNotFound()
        {
            // Arrange
            var command = new DeleteMotorcycleCommand(Guid.NewGuid());
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync((Motorcycle)null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Motorcycle not found", result.Error);
            _motorcycleRepositoryMock.Verify(r => r.DeleteAsync(It.IsAny<Motorcycle>(), It.IsAny<CancellationToken>()), Times.Never);
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