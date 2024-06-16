using Moq;
using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleById;
using RentNDeliver.Domain.Motorcycles;


namespace RentNDeliver.Application.Tests.Motorcycles.Queries
{
    public class GetMotorcycleByIdQueryHandlerTests
    {
        private readonly Mock<IMotorcycleRepository> _motorcycleRepositoryMock;
        private readonly GetMotorcycleByIdQueryHandler _handler;

        public GetMotorcycleByIdQueryHandlerTests()
        {
            _motorcycleRepositoryMock = new Mock<IMotorcycleRepository>();
            _handler = new GetMotorcycleByIdQueryHandler(_motorcycleRepositoryMock.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnMotorcycle_WhenIdIsValid()
        {
            // Arrange
            var command = new GetMotorcycleByIdQuery(Guid.NewGuid());
            var existingMotorcycle = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync(existingMotorcycle);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(existingMotorcycle!.Id, result!.Id);
            _motorcycleRepositoryMock.Verify(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldReturnNull_WhenMotorcycleNotFound()
        {
            // Arrange
            var command = new GetMotorcycleByIdQuery(Guid.NewGuid());
            _motorcycleRepositoryMock.Setup(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
                                     .ReturnsAsync((Motorcycle)null!);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.Null(result);
            _motorcycleRepositoryMock.Verify(r => r.GetByIdAsync(It.IsAny<Guid>(), It.IsAny<CancellationToken>()), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldThrowArgumentNullException_WhenCommandIsNull()
        {
            // Act & Assert
            await Assert.ThrowsAsync<ArgumentNullException>(() => _handler.Handle(null!, CancellationToken.None));
        }
    }
}