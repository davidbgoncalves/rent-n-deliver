using RentNDeliver.Application.DeliveryPeople.Queries;

namespace RentNDeliver.Web.Areas.Admin.Models.DeliveryPeople;

public class DeliveryPerson
{
    public DeliveryPerson(Guid id, string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType, DateTime createdAt, DateTime? updatedAt)
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
    public static DeliveryPerson ToModel(this DeliveryPersonDto entity)
    {
        return new DeliveryPerson(entity.Id, entity.Name, entity.Cnpj, entity.BirthDate, entity.CnhNumber, entity.CnhType, entity.CreatedAt, entity.UpdatedAt);
    }
}