using RentNDeliver.Domain.Motorcycles;
using Moq;
using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;

namespace RentNDeliver.Application.Tests.Motorcycles.GetMotorcycleList;

public class GetMotorcycleListQueryHandlerTests
{
    private readonly Mock<IMotorcycleRepository> _motorcycleRepositoryMock;
    private readonly GetMotorcycleListQueryHandler _handler;

    public GetMotorcycleListQueryHandlerTests()
    {
        _motorcycleRepositoryMock = new Mock<IMotorcycleRepository>();
        _handler = new GetMotorcycleListQueryHandler(_motorcycleRepositoryMock.Object);
    }

    private Motorcycle CreateTestMotorcycle(int year, string model, string licensePlate, DateTime createdAt, DateTime? updatedAt)
    {
        var result = Motorcycle.Create(year, model, licensePlate);
        if (result.IsSuccess)
        {
            var motorcycle = result.Value;
            // Using reflection to set private properties for testing purposes
            typeof(Motorcycle).GetProperty(nameof(Motorcycle.CreatedAt))?.SetValue(motorcycle, createdAt);
            typeof(Motorcycle).GetProperty(nameof(Motorcycle.UpdateAt))?.SetValue(motorcycle, updatedAt);
            return motorcycle!;
        }
        throw new InvalidOperationException("Failed to create test motorcycle");
    }

    [Fact]
    public async Task Handle_WithValidRequest_ReturnsMotorcycleList()
    {
        // Arrange
        var motorcycles = new List<Motorcycle>
        {
            CreateTestMotorcycle(2021, "Model1", "ABC1234", DateTime.UtcNow, null),
            CreateTestMotorcycle(2022, "Model2", "DEF5678", DateTime.UtcNow, null)
        };

        _motorcycleRepositoryMock
            .Setup(repo => repo.GetAll(It.IsAny<CancellationToken>()))
            .ReturnsAsync(motorcycles);

        var query = new GetMotorcycleListQuery();

        // Act
        var result = await _handler.Handle(query, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(motorcycles.Count, result.Count);
        Assert.Equal(motorcycles[0].LicensePlate, result[0].LicensePlate);
        Assert.Equal(motorcycles[1].Model, result[1].Model);
    }

    [Fact]
    public async Task Handle_WithLicensePlateFilter_ReturnsFilteredMotorcycleList()
    {
        // Arrange
        var motorcycles = new List<Motorcycle>
        {
            CreateTestMotorcycle(2021, "Model1", "ABC1234", DateTime.UtcNow, null)
        };

        _motorcycleRepositoryMock
            .Setup(repo => repo.GetListByLicensePlateAsync("ABC1234", It.IsAny<CancellationToken>()))
            .ReturnsAsync(motorcycles);

        var query = new GetMotorcycleListQuery("ABC1234");

        // Act
        var result = await _handler.Handle(query, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Single(result);
        Assert.Equal("ABC1234", result[0].LicensePlate);
    }

    [Fact]
    public async Task Handle_WithLicensePlateFilter_ReturnsEmptyListWhenNoMatches()
    {
        // Arrange
        var motorcycles = new List<Motorcycle>();

        _motorcycleRepositoryMock
            .Setup(repo => repo.GetListByLicensePlateAsync("NONEXISTENT", It.IsAny<CancellationToken>()))
            .ReturnsAsync(motorcycles);

        var query = new GetMotorcycleListQuery("NONEXISTENT");

        // Act
        var result = await _handler.Handle(query, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task Handle_WithoutLicensePlateFilter_ReturnsEmptyListWhenNoMotorcycles()
    {
        // Arrange
        var motorcycles = new List<Motorcycle>();

        _motorcycleRepositoryMock
            .Setup(repo => repo.GetAll(It.IsAny<CancellationToken>()))
            .ReturnsAsync(motorcycles);

        var query = new GetMotorcycleListQuery();

        // Act
        var result = await _handler.Handle(query, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task Handle_WithNullRequest_ThrowsArgumentNullException()
    {
        // Arrange
        GetMotorcycleListQuery query = null!;

        // Act & Assert
        await Assert.ThrowsAsync<ArgumentNullException>(() => _handler.Handle(query, CancellationToken.None));
    }
}