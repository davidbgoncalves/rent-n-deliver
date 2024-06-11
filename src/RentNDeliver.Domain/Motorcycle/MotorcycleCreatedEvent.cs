using RentNDeliver.Domain.Abstractions.DomainEvents;

namespace RentNDeliver.Domain.Motorcycle;

public record MotorcycleCreatedEvent(Guid MotorcycleId) : IDomainEvent;