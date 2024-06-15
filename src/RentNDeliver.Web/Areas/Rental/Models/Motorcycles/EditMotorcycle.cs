using System.ComponentModel.DataAnnotations;
using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

public class EditMotorcycle
{
   public EditMotorcycle(Guid id, int year, string model, string licensePlate)
    {
        Id = id;
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
    }

    public Guid Id { get; set; }
    public int Year { get; set; }
    public string Model { get; set; }

    [Required]
    [StringLength(7)]
    public string LicensePlate { get; set; }
    
}

public static class EditMotorcycleMappingExtensions
{
    public static EditMotorcycle ToEditMotorcycleModel(this MotorcycleListItemDto dto)
    {
        return new EditMotorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate);
    }
}