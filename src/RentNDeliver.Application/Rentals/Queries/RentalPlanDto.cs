namespace RentNDeliver.Application.Rentals.Queries;

public class RentalPlanDto(Guid rentalPlanId, string name, int minimumNumberOfDays, decimal dayCost, decimal earlyDeliveryFee, decimal additionalDayFee)
{
    public Guid RentalPlanId { get; private set; } = rentalPlanId;
    public string Name { get; private set; } = name;
    public int MinimumNumberOfDays { get; private set; } = minimumNumberOfDays;
    public decimal DayCost { get; private set; } = dayCost;
    public decimal EarlyDeliveryFee { get; private set; } = earlyDeliveryFee;
    public decimal AdditionalDayFee { get; private set; } = additionalDayFee;
}