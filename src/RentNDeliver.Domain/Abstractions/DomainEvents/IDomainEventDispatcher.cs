namespace RentNDeliver.Domain.Abstractions.DomainEvents;

public interface IDomainEventDispatcher
{
    Task Dispatch(IDomainEvent domainEvent);
}