using System;

namespace RentNDeliver.Domain.Entities;

public class Motorcycle
{
    public Guid Id { get; private set; }
    public int Year { get; private set; }
    public string Model { get; private set; }
    public string LicensePlate { get; private set; }
}