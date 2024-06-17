using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPeopleList;
using RentNDeliver.Web.Areas.Admin.Models.DeliveryPeople;

namespace RentNDeliver.Web.Areas.Admin.Controllers;

[Area("Admin")]
public class DeliveryPeopleController(IMediator mediator)
    : Controller
{
    public async Task<IActionResult> Index()
    {
        var deliveryPeopleDtoList = await mediator.Send(new GetDeliveryPeopleListQuery());
        if (deliveryPeopleDtoList.Count == 0)
        {
            return View(Enumerable.Empty<DeliveryPerson>());
        }

        var deliveryPeopleModelList = deliveryPeopleDtoList.Select(x => x.ToModel());
        return View(deliveryPeopleModelList);
    }
}