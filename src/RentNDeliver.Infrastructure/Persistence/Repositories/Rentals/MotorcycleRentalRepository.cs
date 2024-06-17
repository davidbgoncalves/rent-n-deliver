using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Rentals;

public class MotorcycleRentalRepository : Repository<MotorcycleRental>, IMotorcycleRentalRepository
{
    public MotorcycleRentalRepository(RentNDeliverDbContext dbContext) : base(dbContext)
    {
    }

    public Task<List<MotorcycleRental>> GetListByDeliveryPersonIdAsync(Guid deliveryPersonId, CancellationToken cancellationToken)
    {
        return DbContext.MotorcycleRentals
            .Include(x =>x.DeliveryPerson)
            .Include(x =>x.Motorcycle)
            .Include(x =>x.RentalPlan)
            .Where(x => x.DeliveryPersonId == deliveryPersonId)
            .ToListAsync(cancellationToken);
    }
}