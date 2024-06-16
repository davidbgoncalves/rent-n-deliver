using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Commands.UpdateMotorcycle;

public class UpdateMotorcycleCommandHandler(
    IMotorcycleRepository motorcycleRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<UpdateMotorcycleCommand, Result>
{
    public async Task<Result> Handle(UpdateMotorcycleCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        
        if(request.Id == Guid.Empty)
            return Result.Failure("Id was not informed");
        
        var motorcycleEntity = await motorcycleRepository.GetByIdAsync(request.Id, cancellationToken);
        
        if(motorcycleEntity == null)
            return Result.Failure($"Motorcycle not found with Id{request.Id.ToString()}");
        
        if(request.LicensePlate == motorcycleEntity?.LicensePlate)
            return Result.Success();

        var motorcycleWithNewLicensePlate = await motorcycleRepository.GetByLicensePlateAsync(request.LicensePlate, cancellationToken);
        if (motorcycleWithNewLicensePlate != null
            && motorcycleWithNewLicensePlate.Id != motorcycleEntity!.Id)
            return Result.Failure($"There is another Motorcycle registered with the License Plate: {request.LicensePlate}");
        
        var motorcycleUpdatedResult = motorcycleEntity!.UpdateLicensePlate(request.LicensePlate);
        if (!motorcycleUpdatedResult.IsSuccess)
            return Result.Failure(motorcycleUpdatedResult.Error);
        
        await motorcycleRepository.UpdateAsync(motorcycleEntity, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        
        return Result.Success();
    }
}