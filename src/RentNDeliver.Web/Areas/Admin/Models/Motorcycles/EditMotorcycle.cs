using System.ComponentModel.DataAnnotations;
using RentNDeliver.Application.Motorcycles.Queries;

namespace RentNDeliver.Web.Areas.Admin.Models.Motorcycles;

public class EditMotorcycle
{
    public EditMotorcycle()
    {
        
    }
    
   public EditMotorcycle(Guid id, int year, string model, string licensePlate)
    {
        Id = id;
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
    }

    public Guid Id { get; set; }
    public int Year { get; set; }
    public string Model { get; set; } = null!;

    [Required]
    [StringLength(7)]
    public string LicensePlate { get; set; } = null!;
}

public static class EditMotorcycleMappingExtensions
{
    public static EditMotorcycle ToEditMotorcycleModel(this MotorcycleListItemDto dto)
    {
        return new EditMotorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate);
    }
}