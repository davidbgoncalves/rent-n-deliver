using RentNDeliver.Domain.Abstractions.Entities;

namespace RentNDeliver.Domain.Motorcycle;

public class Motorcycle : AggregateRoot
{
    public Motorcycle(int year, string model, string licensePlate)
    {
        Year = year;
        Model = model;
        LicensePlate = licensePlate;
    }
    public int Year { get; private set; }
    public string Model { get; private set; }
    public string LicensePlate { get; private set; }
}