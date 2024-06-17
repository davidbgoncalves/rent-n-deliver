using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.Motorcycles.Queries.GetAvailableMotorcycleToRental;

public record GetAvailableMotorcycleForRentalQuery : IQuery<List<MotorcycleListItemDto>>;