using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.Rentals.Queries.GetMotorcycleRentalsByDeliveryPersonId;

public record GetMotorcycleRentalsByDeliveryPersonIdQuery(Guid DeliveryPersonId) : IQuery<List<MotorcycleRentalDto>>;