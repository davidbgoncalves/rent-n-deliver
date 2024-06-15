using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(IConfiguration configuration)
    {
        var client = new MongoClient(configuration.GetConnectionString("MongoDbConnection"));
        _database = client.GetDatabase(configuration["MongoDbSettings:DatabaseName"]);
    }

    public IMongoCollection<MotorcycleCreatedEventLog> MotorcycleLogs => 
        _database.GetCollection<MotorcycleCreatedEventLog>("MotorcycleCreatedEventLogs");
}