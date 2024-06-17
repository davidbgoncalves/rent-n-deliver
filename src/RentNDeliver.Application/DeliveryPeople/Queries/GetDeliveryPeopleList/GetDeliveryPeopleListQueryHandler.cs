using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPeopleList;

public class GetDeliveryPeopleListQueryHandler(IDeliveryPeopleRepository deliveryPeopleRepository) 
    : IQueryHandler<GetDeliveryPeopleListQuery, List<DeliveryPersonDto>>
{
    public async Task<List<DeliveryPersonDto>> Handle(GetDeliveryPeopleListQuery request, CancellationToken cancellationToken)
    {
        var deliveryPeopleList = await deliveryPeopleRepository.GetAll(cancellationToken);
        var deliveryPeoploListDtos = deliveryPeopleList
            .Select(deliveryPeoploDto => new DeliveryPersonDto(
                deliveryPeoploDto.Id, 
                deliveryPeoploDto.Name, 
                deliveryPeoploDto.Cnpj, 
                deliveryPeoploDto.BirthDate, 
                deliveryPeoploDto.CnhNumber, 
                deliveryPeoploDto.CnhType, 
                deliveryPeoploDto.CreatedAt, 
                deliveryPeoploDto.UpdatedAt))
            .ToList();

        return deliveryPeoploListDtos;
    }
}