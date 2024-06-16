using RentNDeliver.Domain.Motorcycles;
using RentNDeliver.Infrastructure.Persistence;

namespace RentNDeliver.Web.Tests;

public static class SeedData
{
    public static void PopulateTestData(RentNDeliverDbContext dbContext)
    {
        var motorcycle1 = Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
        var motorcycle2 = Motorcycle.Create(2021, "Yamaha", "ABC5678").Value;

        dbContext.Motorcycles.AddRange(motorcycle1!, motorcycle2!);
        dbContext.SaveChanges();
    }
}