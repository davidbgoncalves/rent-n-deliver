using System.ComponentModel.DataAnnotations;

namespace RentNDeliver.Web.Areas.Delivery.Models.Rentals;

public class ReturnMotorcycle
{
    public ReturnMotorcycle()
    {
        
    }
    public ReturnMotorcycle(DateTime returnDate, Guid motorcycleRentalId)
    {
        ReturnDate = returnDate;
        MotorcycleRentalId = motorcycleRentalId;
    }

    [Required] public DateTime ReturnDate { get; init; } = DateTime.UtcNow;
    
    [Required]
    public Guid MotorcycleRentalId { get; set; }
}