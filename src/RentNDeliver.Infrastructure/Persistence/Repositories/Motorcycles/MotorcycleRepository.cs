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

    public Task<bool> CheckIfExistsByLicensePlate(string licensePlate, CancellationToken cancellationToken)
    {
        return _context.Motorcycles
            .AnyAsync(x => x.LicensePlate == licensePlate, 
                cancellationToken: cancellationToken);
    }
}