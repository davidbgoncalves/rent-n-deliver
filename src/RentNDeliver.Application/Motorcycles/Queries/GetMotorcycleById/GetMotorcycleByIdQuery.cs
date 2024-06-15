using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleById;

public record GetMotorcycleByIdQuery(Guid Id) : IQuery<MotorcycleListItemDto?>;