using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPersonByCNPJ;
using RentNDeliver.Web.Areas.Delivery.Models.Account;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Delivery.Controllers
{
    [Area("Delivery")]
    public class AccountController(IMediator mediator) : Controller
    {
        // GET: AccountController
        public async Task<ActionResult> Index()
        {
            var deliveryPersonCnpj = HttpContext.Session.GetString(UserData.UserCNPJ);
            if (string.IsNullOrWhiteSpace(deliveryPersonCnpj))
                RedirectToAction("Index", "Home", new { area = "Register" });
            
            var deliveryPersonDto = await mediator.Send(new GetDeliveryPersonByCnpjQuery(deliveryPersonCnpj!));
            if(deliveryPersonDto == null)
                RedirectToAction("Index", "Home", new { area = "Register" });

            var model = deliveryPersonDto!.ToModel();
            return View(model);
        }
        
    }
}
