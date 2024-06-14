using MediatR;

namespace RentNDeliver.Application.Abstractions.Queries;

public interface IQuery<out TResult> : IRequest<TResult>
{
    
}