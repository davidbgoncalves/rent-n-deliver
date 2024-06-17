using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.DeliveryPeople;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Domain.Rentals;

public class MotorcycleRental : AggregateRoot
{
#pragma warning disable CS8618 // this is needed for the ORM for serializing Value Objects
    private MotorcycleRental()
#pragma warning restore CS8618
    {

    }

    private MotorcycleRental(
        Guid motorcycleId, 
        Guid deliveryPersonId, 
        RentalPlan selectedRentalPlan,
        DateTime startDate,
        DateTime expectedEndDate,
        DateTime createdAt)
    {
        MotorcycleId = motorcycleId;
        DeliveryPersonId = deliveryPersonId;
        StartDate = startDate;
        ExpectedEndDate = expectedEndDate;
        CreatedAt = createdAt;
        RentalPlan = selectedRentalPlan;
    }
    
    public Guid MotorcycleId { get; private set; }
    public Guid DeliveryPersonId { get; private set; }
    public DateTime StartDate { get; private set; }
    public DateTime ExpectedEndDate { get; private set; }
    public DateTime? EndDate { get; private set; }
    public decimal? TotalCost { get; private set; }
    
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }

    public RentalPlan RentalPlan { get; }
    public Motorcycle? Motorcycle { get; set; }
    public DeliveryPerson? DeliveryPerson { get; set; }
    
    public static Result<MotorcycleRental> Create(
        Guid motorcycleId, 
        Guid deliveryPersonId, 
        RentalPlan rentalPlan,
        DateTime expectedEndDate)
    {
        if(motorcycleId == Guid.Empty)
            return Result<MotorcycleRental>.Failure("MotorcycleId is required");
        
        if(deliveryPersonId == Guid.Empty)
            return Result<MotorcycleRental>.Failure("DeliveryPersonId is required");

        if(expectedEndDate == default)
            return Result<MotorcycleRental>.Failure("ExpectedEndDate is required");
        
        var createdAt = DateTime.UtcNow;
        var startDate = createdAt.Date.AddDays(1);
        
        return Result<MotorcycleRental>.Success(new MotorcycleRental(motorcycleId, deliveryPersonId, rentalPlan, startDate, expectedEndDate, createdAt));
    }

    public Result<decimal> Finish(DateTime endDate)
    {
        bool isNeededToChargeApplyEarlyDeliveryFee = endDate.Date < ExpectedEndDate.Date;
        bool isNeededToChargeAdditionalDayFee = endDate.Date > ExpectedEndDate.Date;
       
        int totalDays = endDate.Date.Subtract(StartDate.Date).Days;
        int contractedDays = ExpectedEndDate.Date.Subtract(StartDate.Date).Days;
        decimal finalTotalCost = 0;
        
        if (isNeededToChargeApplyEarlyDeliveryFee)
        {
            var remainingDays = contractedDays - totalDays;
            finalTotalCost = totalDays * RentalPlan.DayCost;
            var totalAmountForRemainingDays = remainingDays * RentalPlan.DayCost;
            if (RentalPlan.EarlyDeliveryFee > 0)
            {
                var earlyDeliveryAmount = totalAmountForRemainingDays * (RentalPlan.EarlyDeliveryFee / 100);
                finalTotalCost += earlyDeliveryAmount;    
            }
        }
        else if (isNeededToChargeAdditionalDayFee)
        {
            finalTotalCost = contractedDays * RentalPlan.DayCost;
            var additionalDays = totalDays - contractedDays;
            var additionalCost = additionalDays * RentalPlan.AdditionalDayFee;
            finalTotalCost += additionalCost;
        }
        else
        {
            finalTotalCost = contractedDays * RentalPlan.DayCost;
        }

        EndDate = endDate;
        TotalCost = finalTotalCost;
        UpdatedAt = DateTime.UtcNow;
        return Result<decimal>.Success(TotalCost.Value);
    }
}