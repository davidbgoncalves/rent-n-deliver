using RentNDeliver.Domain.DeliveryPeople;
using RentNDeliver.Domain.Motorcycles;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Application.Rentals.Queries;

public class MotorcycleRentalDto
{
    public MotorcycleRentalDto(Guid id, Motorcycle? motorcycle, RentalPlan? rentalPlan, DeliveryPerson? deliveryPerson, DateTime startDate, DateTime expectedEndDate, DateTime? endDate, decimal? totalCost, DateTime createdAt, DateTime? updatedAt)
    {
        Id = id;
        Motorcycle = motorcycle;
        RentalPlan = rentalPlan;
        DeliveryPerson = deliveryPerson;
        StartDate = startDate;
        ExpectedEndDate = expectedEndDate;
        EndDate = endDate;
        TotalCost = totalCost;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public Guid Id { get; set; }
    public Motorcycle? Motorcycle { get; set; }
    public RentalPlan? RentalPlan { get; set; }
    public DeliveryPerson? DeliveryPerson { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime ExpectedEndDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? TotalCost { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}

public static class MotorcycleRentalMappingExtensions
{
    public static MotorcycleRentalDto ToDto(this MotorcycleRental entity)
    {
        return new MotorcycleRentalDto(
            entity.Id, 
            entity.Motorcycle, 
            entity.RentalPlan, 
            entity.DeliveryPerson, 
            entity.StartDate, 
            entity.ExpectedEndDate, 
            entity.EndDate, 
            entity.TotalCost, 
            entity.CreatedAt, 
            entity.UpdatedAt);
    }
}