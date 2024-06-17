using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Application.DeliveryPeople.Queries;

public class DeliveryPersonDto
{
    public DeliveryPersonDto(Guid id, string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType, DateTime createdAt, DateTime? updatedAt)
    {
        Id = id;
        Name = name;
        Cnpj = cnpj;
        BirthDate = birthDate;
        CnhNumber = cnhNumber;
        CnhType = cnhType;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Cnpj { get; set; }
    public DateTime BirthDate { get; set; }
    public string CnhNumber { get; set; }
    public string CnhType { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}

public static class DeliveryPersonMappingExtensions
{
    public static DeliveryPersonDto ToDto(this DeliveryPerson entity)
    {
        return new DeliveryPersonDto(entity.Id, entity.Name, entity.Cnpj, entity.BirthDate, entity.CnhNumber, entity.CnhType, entity.CreatedAt, entity.UpdatedAt);
    }
}