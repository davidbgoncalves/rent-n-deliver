using MongoDB.Driver;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);
    }

    public IMongoCollection<MotorcycleCreatedEventLog> MotorcycleLogs => 
        _database.GetCollection<MotorcycleCreatedEventLog>("MotorcycleCreatedEventLogs");
}