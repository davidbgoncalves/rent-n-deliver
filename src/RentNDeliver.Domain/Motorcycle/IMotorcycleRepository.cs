using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.Motorcycle;

public interface IMotorcycleRepository : IRepository<Motorcycle>
{
    Task<Motorcycle> GetByIdAsync(Guid id);
    Task<Motorcycle> GetByLicensePlateAsync(string licensePlate);
}