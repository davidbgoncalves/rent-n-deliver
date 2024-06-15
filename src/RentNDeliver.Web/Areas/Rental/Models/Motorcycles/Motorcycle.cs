using System.ComponentModel.DataAnnotations;
using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

public class Motorcycle
{
    public Motorcycle()
    {
        Year = DateTime.UtcNow.Year;
    } 
    
    public Motorcycle(Guid id, int year, string model, string licensePlate, DateTime createdAt, DateTime? updatedAt)
    {
        Id = id;
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public Guid Id { get; init; }

    [Required] [Range(1885, 3000)] 
    public int Year { get; init; }
    
    [Required]
    [StringLength(50)]
    public string Model { get; init; } = null!;

    [Required]
    [StringLength(7)]
    public string LicensePlate { get; init; } = null!;

    public DateTime CreatedAt { get; init; }
    
    public DateTime? UpdatedAt { get; init; }
}

public static class MotorcycleMappingExtensions
{
    public static Motorcycle ToMotorcycleModel(this MotorcycleListItemDto dto)
    {
        return new Motorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate, dto.CreatedDate, dto.LastUpdatedDate);
    }
}
