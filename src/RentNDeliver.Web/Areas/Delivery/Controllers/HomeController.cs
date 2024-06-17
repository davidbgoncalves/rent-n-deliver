using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPersonByCNPJ;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Delivery.Controllers
{
    [Area("Delivery")]
    public class HomeController(IMediator mediator) : Controller
    {
        // GET: HomeController
        public async Task<ActionResult> Index(string? cnpj)
        {
            if (!string.IsNullOrEmpty(cnpj))
            {
                var deliveryPerson = await mediator.Send(new GetDeliveryPersonByCnpjQuery(cnpj));
                if (deliveryPerson != null)
                {
                    HttpContext.Session.SetString(UserData.UserCNPJ, deliveryPerson.Cnpj);
                    HttpContext.Session.SetString(UserData.UserID, deliveryPerson.Id.ToString());
                }
            }
            return View();
        }

    }
}
