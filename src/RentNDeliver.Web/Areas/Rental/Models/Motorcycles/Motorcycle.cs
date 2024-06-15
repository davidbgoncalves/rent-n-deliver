using System.ComponentModel.DataAnnotations;
using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

public class Motorcycle
{
    public Motorcycle()
    {
        
    } 
    
    public Motorcycle(Guid Id, int Year, string Model, string LicensePlate, DateTime CreatedAt, DateTime? UpdatedAt)
    {
        this.Id = Id;
        this.Year = Year;
        this.Model = Model;
        this.LicensePlate = LicensePlate;
        this.CreatedAt = CreatedAt;
        this.UpdatedAt = UpdatedAt;
    }

    public Guid Id { get; init; }

    [Required] [Range(1885, 3000)] public int Year { get; init; }
    
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
    public static Motorcycle ToModel(this MotorcycleListItemDto dto)
    {
        return new Motorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate, dto.CreatedDate, dto.LastUpdatedDate);
    }
}
