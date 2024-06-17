using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Application.Rentals.Queries.GetAvailableRentalPlans;

public class GetAvailableRentalPlansQueryHandler 
    : IQueryHandler<GetAvailableRentalPlansQuery, List<RentalPlanDto>>
{
    public Task<List<RentalPlanDto>> Handle(GetAvailableRentalPlansQuery request, CancellationToken cancellationToken)
    {
        var rentalPlanDtoList = RentalPlan
            .AvailablePlans()
            .Select(plan => new RentalPlanDto(
                plan.RentalPlanId, 
                plan.Name, 
                plan.MinimumNumberOfDays, 
                plan.DayCost, 
                plan.EarlyDeliveryFee, 
                plan.AdditionalDayFee))
            .ToList();
        return Task.FromResult(rentalPlanDtoList);
    }
}