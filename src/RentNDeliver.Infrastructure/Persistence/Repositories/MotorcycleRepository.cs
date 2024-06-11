using RentNDeliver.Domain.Motorcycle;

namespace RentNDeliver.Infrastructure.Persistence.Repositories;

public class MotorcycleRepository : IMotorcycleRepository
{
    public Task<IReadOnlyList<Motorcycle>> GetALl()
    {
        throw new NotImplementedException();
    }

    public Task<Guid> AddAsync(Motorcycle entity)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(Motorcycle entity)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(Motorcycle entity)
    {
        throw new NotImplementedException();
    }

    public Task<Motorcycle> GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<Motorcycle> GetByLicensePlateAsync(string licensePlate)
    {
        throw new NotImplementedException();
    }
}