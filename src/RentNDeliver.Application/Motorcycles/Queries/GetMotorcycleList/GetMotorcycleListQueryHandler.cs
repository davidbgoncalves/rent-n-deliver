using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Motorcycles;
using ArgumentNullException = System.ArgumentNullException;

namespace RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;

public class GetMotorcycleListQueryHandler : IQueryHandler<GetMotorcycleListQuery, List<MotorcycleListItemDto>>
{
    private readonly IMotorcycleRepository _motorcycleRepository;

    public GetMotorcycleListQueryHandler(IMotorcycleRepository motorcycleRepository)
    {
        _motorcycleRepository = motorcycleRepository;
    }
    
    public async Task<List<MotorcycleListItemDto>> Handle(GetMotorcycleListQuery request, CancellationToken cancellationToken)
    {
        if (request == null)
            throw new ArgumentNullException(nameof(request));

        var motorcyclesList = !string.IsNullOrWhiteSpace(request.LicensePlace)
            ? await _motorcycleRepository.GetListByLicensePlateAsync(request.LicensePlace, cancellationToken)
            : await _motorcycleRepository.GetAll(cancellationToken);

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