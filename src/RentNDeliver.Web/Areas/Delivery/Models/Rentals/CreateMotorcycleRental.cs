using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RentNDeliver.Web.Areas.Delivery.Models.Rentals;

public class CreateMotorcycleRental
{
    public CreateMotorcycleRental()
    {
        
    }
    
    public CreateMotorcycleRental(Guid deliveryPersonId)
    {
        DeliveryPersonId = deliveryPersonId;
    }

    public Guid DeliveryPersonId { get; init; }
    public Guid MotorcycleId { get; init; }
    
    [Required]
    public Guid RentalPlanId { get; init; }

    public DateTime ExpectedReturnDate { get; init; } = DateTime.UtcNow.Date.AddDays(7);
}

