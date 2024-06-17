using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Queries.GetAvailableMotorcycleToRental;

public class GetAvailableMotorcycleForRentalQueryHandler(IMotorcycleRepository motorcycleRepository) 
    : IQueryHandler<GetAvailableMotorcycleForRentalQuery, List<MotorcycleListItemDto>>
{
    public async Task<List<MotorcycleListItemDto>> Handle(GetAvailableMotorcycleForRentalQuery request, CancellationToken cancellationToken)
    {
        var motorcyclesList = await motorcycleRepository.GetAvailableForRentalAsync(cancellationToken);
        var motorcycleListItemDtos = motorcyclesList
            .Select(motorcycle => new MotorcycleListItemDto(
                motorcycle.Id, 
                motorcycle.LicensePlate, 
                motorcycle.Model, 
                motorcycle.Year, 
                motorcycle.CreatedAt, 
                motorcycle.UpdateAt))
            .ToList();
        return motorcycleListItemDtos;
    }
}