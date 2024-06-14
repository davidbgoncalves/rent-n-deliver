using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.Motorcycles;

public interface IMotorcycleRepository : IRepository<Motorcycle>
{
    Task<Motorcycle> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken);
}