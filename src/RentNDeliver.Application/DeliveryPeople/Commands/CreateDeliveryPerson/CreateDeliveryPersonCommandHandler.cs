using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Application.DeliveryPeople.Commands.CreateDeliveryPerson;

public class CreateDeliveryPersonCommandHandler(
    IDeliveryPeopleRepository deliveryPeopleRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<CreateDeliveryPersonCommand, Result>
{
    public async Task<Result> Handle(CreateDeliveryPersonCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);

        var deliveryPersonEntityResult = DeliveryPerson.Create(request.Name, request.Cnpj, request.Birthdate, request.CnhNumber, request.CnhType, request.ChnImageUrl);
        if (!deliveryPersonEntityResult.IsSuccess)
            return Result.Failure(deliveryPersonEntityResult.Error);

        var verifyIfExistsWithSameCnpj = await deliveryPeopleRepository.GetByCnpjAsync(request.Cnpj, cancellationToken);
        if(verifyIfExistsWithSameCnpj != null)
            return Result.Failure("There is already a person registered with this CNPJ");
        
        var verifyIfExistsWithSameCnhNumber = await deliveryPeopleRepository.GetByCnhNumberAsync(request.CnhNumber, cancellationToken);
        if(verifyIfExistsWithSameCnhNumber != null)
            return Result.Failure("There is already a person registered with this CNH number");

        await deliveryPeopleRepository.AddAsync(deliveryPersonEntityResult.Value!, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}