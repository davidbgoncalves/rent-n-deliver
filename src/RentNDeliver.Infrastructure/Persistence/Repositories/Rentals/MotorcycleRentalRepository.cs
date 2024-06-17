using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Rentals;

public class MotorcycleRentalRepository : Repository<MotorcycleRental>, IMotorcycleRentalRepository
{
    public MotorcycleRentalRepository(RentNDeliverDbContext dbContext) : base(dbContext)
    {
    }
}