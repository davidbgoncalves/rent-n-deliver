using RentNDeliver.Application.Abstractions.Queries;

namespace RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPeopleList;

public record GetDeliveryPeopleListQuery : IQuery<List<DeliveryPersonDto>>;