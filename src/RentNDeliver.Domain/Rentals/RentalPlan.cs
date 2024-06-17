namespace RentNDeliver.Domain.Rentals;

public class RentalPlan(Guid rentalPlanId, string name, int minimumNumberOfDays, decimal dayCost, decimal earlyDeliveryFee, decimal additionalDayFee)
{
    public Guid RentalPlanId { get; private set; } = rentalPlanId;
    
    public string Name { get; private set; } = name;
    public int MinimumNumberOfDays { get; private set; } = minimumNumberOfDays;
    public decimal DayCost { get; private set; } = dayCost;
    public decimal EarlyDeliveryFee { get; private set; } = earlyDeliveryFee;
    public decimal AdditionalDayFee { get; private set; } = additionalDayFee;

    public static List<RentalPlan> AvailablePlans()
    {
        var plans = new List<RentalPlan>
        {
            new RentalPlan(Guid.Parse("95d8de12-23d1-4643-a226-26629bc03ee4"),"7 days", 7, 30, 20, 50),
            new RentalPlan(Guid.Parse("c990e751-8dd6-494f-a9cf-cfab4c53c668"),"15 days", 15, 28, 40, 50),
            new RentalPlan(Guid.Parse("d332052d-3b86-4714-9aba-8c163aab2d32"),"30 days", 30, 22, 0, 50),
            new RentalPlan(Guid.Parse("9a031bc1-ee18-466d-86a9-913f850aaa3d"),"45 days", 45, 20, 0, 50),
            new RentalPlan(Guid.Parse("2a2abc39-f142-42ef-8cec-8e98dbde8695"),"50 days", 50, 18, 0, 50)
        };
        return plans;
    }
}