using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles;

public class MotorcycleListItemDto(
    Guid Id, string 
    LicensePlate, 
    string Model, 
    int Year, 
    DateTime CreatedDate, 
    DateTime? LastUpdatedDate)
{
    public Guid Id { get; init; } = Id;
    public string LicensePlate { get; init; } = LicensePlate;
    public string Model { get; init; } = Model;
    public int Year { get; init; } = Year;
    public DateTime CreatedDate { get; init; } = CreatedDate;
    public DateTime? LastUpdatedDate { get; init; } = LastUpdatedDate;
}

public static class MotorcycleMappingExtensions
{
    public static MotorcycleListItemDto ToDto(this Motorcycle entity)
    {
        return new MotorcycleListItemDto(entity.Id, entity.LicensePlate, entity.Model, entity.Year, entity.CreatedAt, entity.UpdateAt);
    }
}