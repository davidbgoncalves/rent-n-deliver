using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Application.DeliveryPeople.Commands.CreateDeliveryPerson;

public record CreateDeliveryPersonCommand(
    string Name, 
    string Cnpj, 
    DateTime Birthdate, 
    string CnhNumber,
    string CnhType,
    string ChnImageUrl) : ICommand<Result>;