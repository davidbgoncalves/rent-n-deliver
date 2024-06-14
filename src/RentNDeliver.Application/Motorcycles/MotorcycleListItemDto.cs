namespace RentNDeliver.Application.Motorcycles;

public record MotorcycleListItemDto(
    Guid Id, string 
    LicensePlate, 
    string Model, 
    int Year, 
    DateTime CreatedDate, 
    DateTime? LastUpdatedDate);