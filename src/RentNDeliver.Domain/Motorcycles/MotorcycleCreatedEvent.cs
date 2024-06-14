using RentNDeliver.Domain.Abstractions.DomainEvents;

namespace RentNDeliver.Domain.Motorcycles;

public record MotorcycleCreatedEvent(Guid MotorcycleId) : IDomainEvent;