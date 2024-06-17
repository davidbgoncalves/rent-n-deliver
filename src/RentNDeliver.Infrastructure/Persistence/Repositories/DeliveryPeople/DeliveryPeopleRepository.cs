using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DeliveryPeople;

public class DeliveryPeopleRepository : Repository<DeliveryPerson>, IDeliveryPeopleRepository
{
    public DeliveryPeopleRepository(RentNDeliverDbContext dbContext) : base(dbContext)
    {
    }

    public Task<DeliveryPerson?> GetByCnpjAsync(string cnpj, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<DeliveryPerson?> GetByCnhNumberAsync(string cnhNumber, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}