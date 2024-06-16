using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.Motorcycles.Commands.DeleteMotorcycle;

public record DeleteMotorcycleCommand(Guid Id) : ICommand<Result>;