using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Motorcycles;

namespace RentNDeliver.Infrastructure.Persistence;

public class RentNDeliverDbContext : DbContext
{
    
    public RentNDeliverDbContext(DbContextOptions<RentNDeliverDbContext> options) 
        : base(options)
    {
        
    }
    
    public DbSet<Motorcycle> Motorcycles { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(RentNDeliverDbContext).Assembly);
    }
}