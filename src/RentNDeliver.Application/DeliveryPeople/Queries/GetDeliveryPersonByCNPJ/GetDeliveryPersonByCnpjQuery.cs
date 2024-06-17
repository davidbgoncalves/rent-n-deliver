using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPersonByCNPJ;

public record GetDeliveryPersonByCnpjQuery(string Cnpj) : IQuery<DeliveryPersonDto?>;