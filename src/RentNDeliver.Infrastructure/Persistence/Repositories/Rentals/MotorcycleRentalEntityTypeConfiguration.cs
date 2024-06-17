using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Rentals;

public class MotorcycleRentalEntityTypeConfiguration: IEntityTypeConfiguration<MotorcycleRental>
{
    public void Configure(EntityTypeBuilder<MotorcycleRental> builder)
    {
        builder.HasKey(m => m.Id);

        builder.HasOne(mr => mr.Motorcycle)
            .WithMany()
            .HasForeignKey(mr => mr.MotorcycleId);
        
        builder.HasOne(mr => mr.DeliveryPerson)
            .WithMany()
            .HasForeignKey(mr => mr.DeliveryPersonId);
        
        builder.OwnsOne(r => r.RentalPlan, rentalPlan =>
        {
            rentalPlan.Property(rp => rp.RentalPlanId).HasColumnName("RentalPlanId");
            rentalPlan.Property(rp => rp.Name).HasColumnName("RentalPlanName");
            rentalPlan.Property(rp => rp.MinimumNumberOfDays).HasColumnName("RentalPlanMinimumNumberOfDays");
            rentalPlan.Property(rp => rp.DayCost).HasColumnName("RentalPlanDayCost");
            rentalPlan.Property(rp => rp.EarlyDeliveryFee).HasColumnName("RentalPlanEarlyDeliveryFee");
            rentalPlan.Property(rp => rp.AdditionalDayFee).HasColumnName("RentalPlanAdditionalDayFee");
        });
    }
}