using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RentNDeliver.Domain.DeliveryPeople;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DeliveryPeople;

public class DeliveryPersonEntityTypeConfiguration: IEntityTypeConfiguration<DeliveryPerson>
{
    public void Configure(EntityTypeBuilder<DeliveryPerson> builder)
    {
        builder.HasKey(m => m.Id);
        builder.HasIndex(m => m.Cnpj).IsUnique();
        builder.HasIndex(m => m.CnhNumber).IsUnique();
    }
}