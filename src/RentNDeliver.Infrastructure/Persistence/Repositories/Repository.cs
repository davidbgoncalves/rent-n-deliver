using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Infrastructure.Persistence.Repositories;

public abstract class Repository<TEntity> : IRepository<TEntity>
    
    where TEntity : AggregateRoot
{
    protected readonly RentNDeliverDbContext DbContext;

    public Repository(RentNDeliverDbContext dbContext) => DbContext = dbContext;


    public Task<TEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return DbContext.Set<TEntity>().FindAsync(id).AsTask();
    }
    
    public Task<List<TEntity>> GetAll(CancellationToken cancellationToken)
    {
        return DbContext.Set<TEntity>().ToListAsync(cancellationToken: cancellationToken = default);
    }

    public Task AddAsync(TEntity entity, CancellationToken cancellationToken = default)
    {
        return DbContext.Set<TEntity>().AddAsync(entity, cancellationToken).AsTask();
    }

    public Task UpdateAsync(TEntity entity, CancellationToken cancellationToken = default)
    {
        DbContext.Set<TEntity>().Update(entity);
        return Task.CompletedTask;
    }

    public Task DeleteAsync(TEntity entity, CancellationToken cancellationToken = default)
    {
        DbContext.Set<TEntity>().Remove(entity);
        return Task.CompletedTask;
    }
}