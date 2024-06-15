using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Motorcycles;

public class MotorcycleRepository(RentNDeliverDbContext context)
    : Repository<Motorcycle>(context), IMotorcycleRepository
{
    private readonly RentNDeliverDbContext _context = context;

    public Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken)
    {
        return _context.Motorcycles
            .Where(x => x.LicensePlate.Contains(licensePlate))
            .ToListAsync(cancellationToken: cancellationToken);
    }

    public Task<Motorcycle?> GetByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken)
    {
        return _context.Motorcycles
            .Where(x => x.LicensePlate == licensePlate)
            .FirstOrDefaultAsync(cancellationToken);
    }
}