using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RentNDeliver.Domain.DeliveryPeople;
using RentNDeliver.Domain.Motorcycles;
using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Infrastructure.Persistence;

public class RentNDeliverDbContext : DbContext
{
    
    public RentNDeliverDbContext(DbContextOptions<RentNDeliverDbContext> options) 
        : base(options)
    {
        
    }
    
    public DbSet<Motorcycle> Motorcycles { get; set; }
    public DbSet<MotorcycleRental> MotorcycleRentals { get; set; }
    public DbSet<DeliveryPerson> DeliveryPeople { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(RentNDeliverDbContext).Assembly);
        
        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            foreach (var property in entityType.GetProperties())
            {
                if (property.ClrType == typeof(DateTime) || property.ClrType == typeof(DateTime?))
                {
                    property.SetValueConverter(new ValueConverter<DateTime, DateTime>(
                        v => DateTime.SpecifyKind(v, DateTimeKind.Utc),
                        v => DateTime.SpecifyKind(v, DateTimeKind.Utc)));
                }
            }
        }
    }
}