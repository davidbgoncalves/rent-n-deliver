using RentNDeliver.Domain.Abstractions.Entities;

namespace RentNDeliver.Domain.Abstractions.Repositories;

public interface IRepository<TEntity> where TEntity : AggregateRoot
{
    Task<IReadOnlyList<TEntity>> GetALl();
    Task<Guid> AddAsync(TEntity entity);
    Task UpdateAsync(TEntity entity);
    Task DeleteAsync(TEntity entity);
}