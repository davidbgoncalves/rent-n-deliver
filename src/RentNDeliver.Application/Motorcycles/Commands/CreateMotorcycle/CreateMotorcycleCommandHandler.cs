using RentNDeliver.Application.Abstractions.Commands;
using RentNDeliver.Domain.Abstractions.ErrorHandling;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;

public class CreateMotorcycleCommandHandler : ICommandHandler<CreateMotorcycleCommand, Result>
{
    private readonly IMotorcycleRepository _motorcycleRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateMotorcycleCommandHandler(
        IMotorcycleRepository motorcycleRepository, 
        IUnitOfWork unitOfWork)
    {
        _motorcycleRepository = motorcycleRepository;
        _unitOfWork = unitOfWork;
    }
    
    public async Task<Result> Handle(CreateMotorcycleCommand request, CancellationToken cancellationToken)
    {
        if (request == null)
            throw new ArgumentNullException(nameof(request));

        var motorcycle = Motorcycle.Create(request.Year, request.Model, request.LicensePlate);
        if (!motorcycle.IsSuccess)
            return Result.Failure(motorcycle.Error);
        
        //Is there a motocycle register with this license plate in the database?
        var exists = await _motorcycleRepository.CheckIfExistsByLicensePlate(request.LicensePlate, cancellationToken);
        if (exists)
            return Result.Failure("There is already a motorcycle registered with this License Plate");
            
        await _motorcycleRepository.AddAsync(motorcycle.Value!, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);
        
        return Result.Success();
    }
}