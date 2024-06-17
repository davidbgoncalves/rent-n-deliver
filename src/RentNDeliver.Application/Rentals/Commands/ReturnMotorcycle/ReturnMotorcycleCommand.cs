using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.Rentals.Commands.ReturnMotorcycle;

public record ReturnMotorcycleCommand(Guid MotorcycleRentalId, DateTime ReturnDate) : ICommand<Result<decimal>>;