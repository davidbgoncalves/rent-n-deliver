using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.DeliveryPeople.Commands.UpdateCnh;

public record UpdateCnhCommand(Guid DeliveryPersonId, string CnhImageUrl) : ICommand<Result>;