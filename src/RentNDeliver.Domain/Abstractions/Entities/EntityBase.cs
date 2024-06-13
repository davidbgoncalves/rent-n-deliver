namespace RentNDeliver.Domain.Abstractions.Entities;

public abstract class EntityBase 
{
    public virtual Guid Id { get; protected set; }

    protected EntityBase()
    {
    }
    
    protected EntityBase(Guid id) => Id = id;
}