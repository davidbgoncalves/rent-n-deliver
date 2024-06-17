using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Application.DeliveryPeople.Commands.UpdateCnh;

public class UpdateCnhCommandHandler(
    IDeliveryPeopleRepository deliveryPeopleRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<UpdateCnhCommand, Result>
{
    public async Task<Result> Handle(UpdateCnhCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        
        if(request.DeliveryPersonId == Guid.Empty)
            return Result.Failure("DeliveryPersonId was not informed");

        var deliveryPersonEntity = await deliveryPeopleRepository.GetByIdAsync(request.DeliveryPersonId, cancellationToken);
        if(deliveryPersonEntity == null)
            return Result.Failure("DeliveryPerson not found");
        
        deliveryPersonEntity.SetCnhImageUrl(request.CnhImageUrl);
        await deliveryPeopleRepository.UpdateAsync(deliveryPersonEntity, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}