using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Application.Rentals.Commands.RentMotorcycle;

public class RentMotorcycleCommandHandler(IMotorcycleRentalRepository motorcycleRentalRepository, IUnitOfWork unitOfWork)
    : ICommandHandler<RentMotorcycleCommand, Result>
{
    public async Task<Result> Handle(RentMotorcycleCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        
        if (request.RentalPlanId == Guid.Empty)
            return Result.Failure("RentalPlanId is required");

        var rentalPlan = RentalPlan.AvailablePlans().FirstOrDefault(x => x.RentalPlanId == request.RentalPlanId);
        if(rentalPlan == null)
            return Result.Failure("RentalPlanId is invalid");
        
        var motorcycleRentalEntity = MotorcycleRental.Create(request.MotorcycleId, request.DeliveryPersonId, rentalPlan, request.ExpectedEndDate);
        if (!motorcycleRentalEntity.IsSuccess)
            return Result.Failure(motorcycleRentalEntity.Error);

        await motorcycleRentalRepository.AddAsync(motorcycleRentalEntity.Value!, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}