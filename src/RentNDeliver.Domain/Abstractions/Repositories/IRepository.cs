using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Domain.Abstractions.Repositories;

public interface IRepository<TEntity> where TEntity : AggregateRoot
{
    Task<List<Motorcycle>> GetAll(CancellationToken cancellationToken);
    Task<Guid> AddAsync(TEntity entity, CancellationToken cancellationToken);
    Task UpdateAsync(TEntity entity, CancellationToken cancellationToken);
    Task DeleteAsync(TEntity entity, CancellationToken cancellationToken);
}