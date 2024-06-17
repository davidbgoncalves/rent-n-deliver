using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Commands.DeleteMotorcycle;

public class DeleteMotorcycleCommandHandler(
    IMotorcycleRepository motorcycleRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<DeleteMotorcycleCommand, Result>
{
    public async Task<Result> Handle(DeleteMotorcycleCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        
        if(request.Id == Guid.Empty)
            return Result.Failure("Id was not informed");

        var motorcycleToBeDeleted = await motorcycleRepository.GetByIdAsync(request.Id, cancellationToken);
        if (motorcycleToBeDeleted == null)
            return Result.Failure("Motorcycle not found");
        
        var hasBeenRented = await motorcycleRepository.HasBeenRentedAsync(motorcycleToBeDeleted.Id, cancellationToken);
        if(hasBeenRented)
            return Result.Failure("It is not possible delete a motorcycle that already was rented.");
        
        await motorcycleRepository.DeleteAsync(motorcycleToBeDeleted, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}