using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.Rentals;

public interface IMotorcycleRentalRepository : IRepository<MotorcycleRental>
{
    Task<List<MotorcycleRental>> GetListByDeliveryPersonIdAsync(Guid deliveryPersonId, CancellationToken cancellationToken);
}