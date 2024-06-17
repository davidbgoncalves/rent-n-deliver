using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Application.Rentals.Queries.GetMotorcycleRentalsByDeliveryPersonId;

public class GetMotorcycleRentalsByDeliveryPersonIdQueryHandler(IMotorcycleRentalRepository motorcycleRentalRepository) 
    : IQueryHandler<GetMotorcycleRentalsByDeliveryPersonIdQuery, List<MotorcycleRentalDto>>
{
    public async Task<List<MotorcycleRentalDto>> Handle(GetMotorcycleRentalsByDeliveryPersonIdQuery request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        var motorcycleRentalsList = await motorcycleRentalRepository.GetListByDeliveryPersonIdAsync(request.DeliveryPersonId, cancellationToken);
        var motorcycleRentalsListDtos = motorcycleRentalsList
            .Select(dto => new MotorcycleRentalDto(
                dto.Id, 
                dto.Motorcycle, 
                dto.RentalPlan, 
                dto.DeliveryPerson, 
                dto.StartDate, 
                dto.ExpectedEndDate, 
                dto.EndDate, 
                dto.TotalCost, 
                dto.CreatedAt, 
                dto.UpdatedAt))
            .ToList();

        return motorcycleRentalsListDtos;
    }
}