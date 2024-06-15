using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;

public class MotorcycleCreatedEventLog
{
    [BsonId]
    [BsonRepresentation(BsonType.String)]
    public string Id { get; set; }

    public string MotorcycleId { get; set; }
    public int Year { get; set; }
    public DateTime CreatedAt { get; set; }
}