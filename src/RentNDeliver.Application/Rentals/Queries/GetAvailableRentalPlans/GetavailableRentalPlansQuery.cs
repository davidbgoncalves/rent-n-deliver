using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.Rentals.Queries.GetAvailableRentalPlans;

public record GetAvailableRentalPlansQuery : IQuery<List<RentalPlanDto>>;