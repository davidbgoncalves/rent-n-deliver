using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Motorcycles;
using ArgumentNullException = System.ArgumentNullException;

namespace RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;

public class GetMotorcycleListQueryHandler(IMotorcycleRepository motorcycleRepository)
    : IQueryHandler<GetMotorcycleListQuery, List<MotorcycleListItemDto>>
{
    public async Task<List<MotorcycleListItemDto>> Handle(GetMotorcycleListQuery request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);

        var motorcyclesList = !string.IsNullOrWhiteSpace(request.LicensePlace)
            ? await motorcycleRepository.GetListByLicensePlateAsync(request.LicensePlace, cancellationToken)
            : await motorcycleRepository.GetAll(cancellationToken);

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