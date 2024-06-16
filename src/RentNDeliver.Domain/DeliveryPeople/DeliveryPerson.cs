using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Domain.DeliveryPeople;

public class DeliveryPerson : AggregateRoot
{
    public DeliveryPerson(string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType, DateTime createdAt, string? cnhImageUrl, DateTime? upDateAt)
    {
        Name = name;
        Cnpj = cnpj;
        BirthDate = birthDate;
        CnhNumber = cnhNumber;
        CnhType = cnhType;
        CnhImageUrl = cnhImageUrl;
    }
    
#pragma warning disable CS8618 // this is needed for the ORM for serializing Value Objects
    private DeliveryPerson(string cnhImageUrl)
#pragma warning restore CS8618
    {
        CnhImageUrl = cnhImageUrl;
    }
    
    public string Name { get; private set; }
    public string Cnpj { get; private set; }
    public DateTime BirthDate { get; private set; }
    public string CnhNumber { get; private set; }
    public string CnhType { get; private set; }
    public string? CnhImageUrl { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime UpdatedAt { get; private set; }

    public void SetCnhImageUrl(string cnhImageUrl)
    {
        CnhImageUrl = cnhImageUrl;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public static Result<DeliveryPerson> Create(string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType)
    {
        //In 1885 the first motorcycle in the world was manufactured.
        if (cnhType != "A"
            && cnhType != "B"
            && cnhType != "AB")
            return Result<DeliveryPerson>.Failure("Invalid CNH Type, you must inform A, B or AB");
        
        if(birthDate == DateTime.MinValue)
            return Result<DeliveryPerson>.Failure("Birthdate is required");
        
        if(string.IsNullOrWhiteSpace(name))
            return Result<DeliveryPerson>.Failure("Name is required");
        
        if(string.IsNullOrWhiteSpace(cnpj))
            return Result<DeliveryPerson>.Failure("CNPJ is required");
        
        if(string.IsNullOrWhiteSpace(cnhNumber))
            return Result<DeliveryPerson>.Failure("CNH Number is required");
        
        return Result<DeliveryPerson>.Success(new DeliveryPerson(name, cnpj, birthDate, cnhNumber, cnhType, DateTime.UtcNow, null, null));
    }
}