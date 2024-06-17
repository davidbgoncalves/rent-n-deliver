using System.ComponentModel.DataAnnotations.Schema;
using RentNDeliver.Application.DeliveryPeople.Queries;

namespace RentNDeliver.Web.Areas.Delivery.Models.Account;

public class DeliveryPerson
{
    public DeliveryPerson(Guid id, string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType, string? cnhImageUrl, DateTime createdAt, DateTime? updatedAt)
    {
        Id = id;
        Name = name;
        Cnpj = cnpj;
        BirthDate = birthDate;
        CnhNumber = cnhNumber;
        CnhType = cnhType;
        CnhImageUrl = cnhImageUrl;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Cnpj { get; set; }
    public DateTime BirthDate { get; set; }
    public string CnhNumber { get; set; }
    public string CnhType { get; set; }
    public string? CnhImageUrl { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}

public static class DeliveryPersonMappingExtensions
{
    public static DeliveryPerson ToModel(this DeliveryPersonDto dto)
    {
        return new DeliveryPerson(dto.Id, dto.Name, dto.Cnpj, dto. BirthDate, dto.CnhNumber, dto.CnhType, dto.CnhImageUrl, dto.CreatedAt, dto.UpdatedAt);
    }
}