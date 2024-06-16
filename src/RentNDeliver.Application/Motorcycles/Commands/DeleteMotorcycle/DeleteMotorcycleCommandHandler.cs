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
        
        //TODO: validar se a moto ja teve alguma locação, caso sim, não poderá ser excluída
        
        await motorcycleRepository.DeleteAsync(motorcycleToBeDeleted, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}