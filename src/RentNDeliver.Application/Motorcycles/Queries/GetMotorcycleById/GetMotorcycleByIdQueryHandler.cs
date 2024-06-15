using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleById;

public class GetMotorcycleByIdQueryHandler(IMotorcycleRepository motorcycleRepository) 
    : IQueryHandler<GetMotorcycleByIdQuery, MotorcycleListItemDto?>
{
    
    public async Task<MotorcycleListItemDto?> Handle(GetMotorcycleByIdQuery request, CancellationToken cancellationToken)
    {
        if (request == null)
            throw new ArgumentNullException(nameof(request));
        
        var motorcycleEntity = await motorcycleRepository.GetByIdAsync(request.Id, cancellationToken);
        
        return motorcycleEntity?.ToDto();
    }
}