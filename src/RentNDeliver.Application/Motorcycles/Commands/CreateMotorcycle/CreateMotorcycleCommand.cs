using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;

public record CreateMotorcycleCommand(int Year, string Model, string LicensePlate) : ICommand<Result>;