using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;

public class CreateMotorcycleCommandHandler(
    IMotorcycleRepository motorcycleRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<CreateMotorcycleCommand, Result>
{
    public async Task<Result> Handle(CreateMotorcycleCommand request, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);

        var motorcycle = Motorcycle.Create(request.Year, request.Model, request.LicensePlate);
        if (!motorcycle.IsSuccess)
            return Result.Failure(motorcycle.Error);
        
        //Is there a motocycle register with this license plate in the database?
        var exists = await motorcycleRepository.GetByLicensePlateAsync(request.LicensePlate, cancellationToken);
        if (exists != null)
            return Result.Failure("There is already a motorcycle registered with this License Plate");
            
        await motorcycleRepository.AddAsync(motorcycle.Value!, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        
        return Result.Success();
    }
}