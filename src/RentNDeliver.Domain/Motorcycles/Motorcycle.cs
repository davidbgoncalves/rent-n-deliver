using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Domain.Motorcycles;

public sealed class Motorcycle : AggregateRoot
{
    private Motorcycle(int year, string model, string licensePlate, DateTime createdAt, DateTime? upDateAt, bool isDeleted = false) 
    {
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
        UpdateAt = upDateAt;
        CreatedAt = createdAt;
        IsDeleted = isDeleted;
        
        AddDomainEvent(new MotorcycleCreatedEvent(Id, Year));
    }

#pragma warning disable CS8618 // this is needed for the ORM for serializing Value Objects
    private Motorcycle()
#pragma warning restore CS8618
    {
    }

    public static Result<Motorcycle> Create(int year, string model, string licensePlate)
    {
        //In 1885 the first motorcycle in the world was manufactured.
        if (year < 1884)
            return Result<Motorcycle>.Failure("Year must be greater than 1885");
        
        if(string.IsNullOrWhiteSpace(model))
            return Result<Motorcycle>.Failure("Model cannot be null or empty");
        
        if(string.IsNullOrWhiteSpace(licensePlate))
            return Result<Motorcycle>.Failure("License Plate cannot be null or empty");
        
        return Result<Motorcycle>.Success(new Motorcycle(year, model, licensePlate, DateTime.UtcNow, null));
    }

    public int Year { get; private set; }
    public string Model { get; private set; }
    public string LicensePlate { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdateAt { get; private set; }
    public bool IsDeleted { get; private set; }
}