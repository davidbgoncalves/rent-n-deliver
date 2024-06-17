using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Application.Rentals.Commands.ReturnMotorcycle;

public class ReturnMotorcycleCommandHandler(IMotorcycleRentalRepository motorcycleRentalRepository, IUnitOfWork unitOfWork) 
    : ICommandHandler<ReturnMotorcycleCommand, Result<decimal>>
{
    public async Task<Result<decimal>> Handle(ReturnMotorcycleCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);

        if (request.MotorcycleRentalId == Guid.Empty)
            return Result<decimal>.Failure("MotorcycleRentalId is required");
        
        if(request.ReturnDate == DateTime.MinValue)
            return Result<decimal>.Failure("ReturnDate is required");

        var motorcycleRentalEntity = await motorcycleRentalRepository.GetByIdAsync(request.MotorcycleRentalId, cancellationToken);
        if (motorcycleRentalEntity == null)
            return Result<decimal>.Failure("MotorcycleRental not found");
        
        var result = motorcycleRentalEntity.Finish(request.ReturnDate);
        if (!result.IsSuccess)
            return Result<decimal>.Failure(result.Error);
        
        await motorcycleRentalRepository.UpdateAsync(motorcycleRentalEntity, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        return Result<decimal>.Success(result.Value);
    }
}