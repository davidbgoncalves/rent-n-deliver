using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

public record Motorcycle(Guid Id, int Year, string Model, string LicensePlate, DateTime CreatedAt, DateTime? UpdatedAt);

public static class MotorcycleMappingExtensions
{
    public static Motorcycle ToModel(this MotorcycleListItemDto dto)
    {
        return new Motorcycle(dto.Id, dto.Year, dto.Model, dto.LicensePlate, dto.CreatedDate, dto.LastUpdatedDate);
    }
}
