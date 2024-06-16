using System.ComponentModel.DataAnnotations;
using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Web.Areas.Admin.Models.Motorcycles;

public class CreateMotorcycle
{
    public CreateMotorcycle()
    {
        
    } 
    
    public CreateMotorcycle(Guid id, int year, string model, string licensePlate)
    {
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
    }
    
    [Required] [Range(1885, 3000)] 
    public int Year { get; init; }
    
    [Required]
    [StringLength(50)]
    public string Model { get; init; } = null!;

    [Required]
    [StringLength(7)]
    public string LicensePlate { get; init; } = null!;
}

public static class CreateMotorcycleMappingExtensions
{
    public static CreateMotorcycle ToCreateMotorcycleModel(this MotorcycleListItemDto dto)
    {
        return new CreateMotorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate);
    }
}