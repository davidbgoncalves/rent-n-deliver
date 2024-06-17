using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.Rentals.Commands.RentMotorcycle;

public record RentMotorcycleCommand(Guid MotorcycleId, Guid DeliveryPersonId, Guid RentalPlanId, DateTime ExpectedEndDate): ICommand<Result>;