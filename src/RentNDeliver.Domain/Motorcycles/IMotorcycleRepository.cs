using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.Motorcycles;

public interface IMotorcycleRepository : IRepository<Motorcycle>
{
    Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken);
    Task<Motorcycle?> GetByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken);
    Task<List<Motorcycle>> GetAvailableForRentalAsync(CancellationToken cancellationToken);
    Task<bool> HasBeenRentedAsync(Guid motorcycleId, CancellationToken cancellationToken);
}