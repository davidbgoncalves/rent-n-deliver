using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DeliveryPeople;

public class DeliveryPeopleRepository : Repository<DeliveryPerson>, IDeliveryPeopleRepository
{
    public DeliveryPeopleRepository(RentNDeliverDbContext dbContext) : base(dbContext)
    {
    }

    public Task<DeliveryPerson?> GetByCnpjAsync(string cnpj, CancellationToken cancellationToken)
    {
        return DbContext.DeliveryPeople.FirstOrDefaultAsync(x => x.Cnpj == cnpj, cancellationToken);
    }

    public Task<DeliveryPerson?> GetByCnhNumberAsync(string cnhNumber, CancellationToken cancellationToken)
    {
        return DbContext.DeliveryPeople.FirstOrDefaultAsync(x => x.CnhNumber == cnhNumber, cancellationToken);
    }
}