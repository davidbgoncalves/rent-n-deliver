using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;

public record GetMotorcycleListQuery(string? LicensePlace = null) : IQuery<List<MotorcycleListItemDto>>;