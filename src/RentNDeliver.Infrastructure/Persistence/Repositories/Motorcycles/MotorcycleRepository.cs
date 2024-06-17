using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Motorcycles;

public class MotorcycleRepository : Repository<Motorcycle>, IMotorcycleRepository
{
    public MotorcycleRepository(RentNDeliverDbContext dbContext) : base(dbContext)
    {
    }
    
    public Task<List<Motorcycle>> GetListByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken)
    {
        return DbContext.Motorcycles
            .Where(x => x.LicensePlate.Contains(licensePlate))
            .ToListAsync(cancellationToken: cancellationToken);
    }

    public Task<Motorcycle?> GetByLicensePlateAsync(string licensePlate, CancellationToken cancellationToken)
    {
        return DbContext.Motorcycles
            .Where(x => x.LicensePlate == licensePlate)
            .FirstOrDefaultAsync(cancellationToken);
    }

    public async Task<List<Motorcycle>> GetAvailableForRentalAsync(CancellationToken cancellationToken)
    {
        var availableMotorcycles = await DbContext.Motorcycles
            .Where(m => !DbContext.MotorcycleRentals
                .Any(r => r.MotorcycleId == m.Id && r.EndDate == null))
            .ToListAsync(cancellationToken);

        return availableMotorcycles;
    }
}