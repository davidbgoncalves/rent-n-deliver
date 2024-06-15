using MediatR;
using RentNDeliver.Domain.Abstractions.DomainEvents;
using RentNDeliver.Domain.Abstractions.Entities;
using RentNDeliver.Domain.Abstractions.Repositories;

namespace RentNDeliver.Infrastructure.Persistence.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private readonly IPublisher _publisher;
    private readonly RentNDeliverDbContext _context;

    public UnitOfWork(
        IPublisher publisher,
        RentNDeliverDbContext context)
    {
        _publisher = publisher;
        _context = context;
    }

    public async Task SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var domainEntities = GetDomainEntities(_context);
        var domainEvents = GetDomainEvents(domainEntities);

        await _context.SaveChangesAsync(cancellationToken);

        foreach (var domainEvent in domainEvents)
        {
            await _publisher.Publish(domainEvent, cancellationToken);
        }
        
        domainEntities.ForEach(d => d.ClearDomainEvents());

        List<AggregateRoot> GetDomainEntities(RentNDeliverDbContext context) =>
            context
                .ChangeTracker
                .Entries<AggregateRoot>()
                .Select(e => e.Entity)
                .ToList();

        List<IDomainEvent> GetDomainEvents(List<AggregateRoot> entities) =>
            entities
                .Where(e => e.DomainEvents.Any())
                .SelectMany(e => e.DomainEvents)
                .ToList();
    }
}