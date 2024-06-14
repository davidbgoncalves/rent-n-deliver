using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Infrastructure.Persistence.Repositories;

public class MotorcycleRepository : IMotorcycleRepository
{
    private readonly RentNDeliverDbContext _context;
    public MotorcycleRepository(RentNDeliverDbContext context)
    {
        _context = context;
    }
    public Task<List<Motorcycle>> GetAll(CancellationToken cancellationToken)
    {
        return _context.Motorcycles.ToListAsync(cancellationToken: cancellationToken);
    }

    public Task<Guid> AddAsync(Motorcycle entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(Motorcycle entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(Motorcycle entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Motorcycle> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken)
    {
        return _context.Motorcycles
            .Where(x => x.LicensePlate.Contains(licensePlate))
            .ToListAsync(cancellationToken: cancellationToken);
    }
}