using RentNDeliver.Application.Abstractions.Queries;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPersonByCNPJ;

public class GetDeliveryPersonByCnpjQueryHandler(IDeliveryPeopleRepository deliveryPeopleRepository) 
    : IQueryHandler<GetDeliveryPersonByCnpjQuery, DeliveryPersonDto?>
{
    public async Task<DeliveryPersonDto?> Handle(GetDeliveryPersonByCnpjQuery request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        var deliveryPerson = await deliveryPeopleRepository.GetByCnpjAsync(request.Cnpj, cancellationToken);
        return deliveryPerson?.ToDto();
    }
}