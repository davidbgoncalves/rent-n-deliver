using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Queries.GetDeliveryPersonByCNPJ;
using RentNDeliver.Web.Areas.Register.Models.Home;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Register.Controllers
{
    [Area("Register")]
    public class HomeController(IMediator mediator) : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View(new Identity());
        }
        
        // POST: HomeController
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Index(Identity model)
        {
            if (!ModelState.IsValid)
                return View(model);
            
            var deliveryPerson = await mediator.Send(new GetDeliveryPersonByCnpjQuery(model.Cnpj));
            if (deliveryPerson != null)
            {
                HttpContext.Session.SetString(UserData.UserCNPJ, deliveryPerson.Cnpj);
                return RedirectToAction("Index", "Home", new { area = "Delivery", cnpj = deliveryPerson.Cnpj });
            }
            else
            {
                return RedirectToAction("Index", "NewAccount", new { area = "Register", cnpj = model.Cnpj });
            }
        }

    }
}
