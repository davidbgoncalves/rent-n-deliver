using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.Motorcycles;

public class MotorcycleEntityTypeConfiguration : IEntityTypeConfiguration<Motorcycle>
{
    public void Configure(EntityTypeBuilder<Motorcycle> builder)
    {
        builder.HasKey(m => m.Id);
        builder.HasIndex(m => m.LicensePlate).IsUnique();
    }
}