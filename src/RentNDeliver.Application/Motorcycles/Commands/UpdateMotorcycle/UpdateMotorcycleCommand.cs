using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.Motorcycles.Commands.UpdateMotorcycle;

public record UpdateMotorcycleCommand(Guid Id, string LicensePlate) : ICommand<Result>;