using RentNDeliver.Domain.Abstractions.Entities;

namespace RentNDeliver.Domain.Abstractions.Repositories;

public interface IRepository<TEntity> where TEntity : AggregateRoot
{
    Task<TEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    Task<List<TEntity>> GetAll(CancellationToken cancellationToken = default);
    Task AddAsync(TEntity entity, CancellationToken cancellationToken = default);
    Task UpdateAsync(TEntity entity, CancellationToken cancellationToken = default);
    Task DeleteAsync(TEntity entity, CancellationToken cancellationToken = default);
}