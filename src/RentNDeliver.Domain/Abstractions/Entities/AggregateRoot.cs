using RentNDeliver.Domain.Abstractions.DomainEvents;

namespace RentNDeliver.Domain.Abstractions.Entities;

public abstract class AggregateRoot : EntityBase
{
    protected AggregateRoot() : this(Guid.NewGuid())
    {

    }

    protected AggregateRoot(Guid id)
    {
        Id = id;
    }
    
    private readonly List<IDomainEvent> _domainEvents = new();
    public IReadOnlyCollection<IDomainEvent> DomainEvents => _domainEvents.AsReadOnly();

    public void AddDomainEvent(IDomainEvent eventItem)
    {
        _domainEvents.Add(eventItem);
    }

    public void ClearDomainEvents()
    {
        _domainEvents.Clear();
    }
}