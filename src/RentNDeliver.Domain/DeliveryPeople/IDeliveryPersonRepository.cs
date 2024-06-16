using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Domain.DeliveryPeople;

public interface IDeliveryPeopleRepository : IRepository<DeliveryPerson>
{
    Task<DeliveryPerson?> GetByCnpjAsync(string cnpj, CancellationToken cancellationToken);
    Task<DeliveryPerson?> GetByCnhNumberAsync(string cnhNumber, CancellationToken cancellationToken);
}