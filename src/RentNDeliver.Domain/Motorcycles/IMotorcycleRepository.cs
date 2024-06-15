using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.Motorcycles;

public interface IMotorcycleRepository : IRepository<Motorcycle>
{
    Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken);
    Task<bool> CheckIfExistsByLicensePlate(string licensePlate, CancellationToken cancellationToken);
}