using RentNDeliver.Application.Rentals.Queries;

namespace RentNDeliver.Web.Areas.Delivery.Models.Rentals;

public class MotorcycleRental
{
    public MotorcycleRental()
    {
        
    }
    
    public MotorcycleRental(Guid id, DateTime startDate, DateTime expectedEndDate, DateTime? endDate, decimal? totalCost, DateTime createdAt, DateTime? updatedAt, int rentalPlanMinimumDays, decimal rentalPlanDailyCost, string motorcycleModel, string motorcycleLicensePlate, string rentalPlanName)
    {
        Id = id;
        StartDate = startDate;
        ExpectedEndDate = expectedEndDate;
        EndDate = endDate;
        TotalCost = totalCost;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
        RentalPlanMinimumDays = rentalPlanMinimumDays;
        RentalPlanDailyCost = rentalPlanDailyCost;
        MotorcycleModel = motorcycleModel;
        MotorcycleLicensePlate = motorcycleLicensePlate;
        RentalPlanName = rentalPlanName;
    }

    public Guid Id { get; init; }

    public string MotorcycleModel { get; init; }

    public string MotorcycleLicensePlate { get; init; }

    public DateTime StartDate { get; init; }
    
    public DateTime ExpectedEndDate { get; init; }
    
    public DateTime? EndDate { get; init; }
    
    public decimal? TotalCost { get; init; }
    
    public DateTime CreatedAt { get; init; }
    
    public DateTime? UpdatedAt { get; init; }
    
    public string RentalPlanName { get; init; }

    public int RentalPlanMinimumDays { get; init; }

    public decimal RentalPlanDailyCost { get; init; }
    
}

public static class MotorcycleRentalMappingExtensions
{
    public static MotorcycleRental ToModel(this MotorcycleRentalDto dto)
    {
        return new MotorcycleRental(dto.Id, dto.StartDate, dto.ExpectedEndDate, dto.EndDate, dto.TotalCost, dto.CreatedAt, dto.UpdatedAt, dto.RentalPlan!.MinimumNumberOfDays, dto.RentalPlan.DayCost, dto.Motorcycle!.Model, dto.Motorcycle.LicensePlate, dto.RentalPlan.Name);
    }
}