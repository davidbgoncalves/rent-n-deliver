using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;

public class MotorcycleCreatedEventLog
{
    public MotorcycleCreatedEventLog(string id, string motorcycleId, int year, DateTime createdAt)
    {
        Id = id;
        MotorcycleId = motorcycleId;
        Year = year;
        CreatedAt = createdAt;
    }

    [BsonId]
    [BsonRepresentation(BsonType.String)]
    public string Id { get; set; }
    public string MotorcycleId { get; set; }
    public int Year { get; set; }
    public DateTime CreatedAt { get; set; }
}