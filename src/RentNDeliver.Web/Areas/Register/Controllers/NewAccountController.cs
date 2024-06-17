using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Commands.CreateDeliveryPerson;
using RentNDeliver.Web.Areas.Register.Models.NewAccount;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Register.Controllers
{
    [Area("Register")]
    public class NewAccountController(IMediator mediator) : Controller
    {
        // GET: NewAccountController
        public ActionResult Index(string cnpj)
        {
            return View(new DeliveryPerson{Cnpj = cnpj});
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Index(DeliveryPerson model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var result = await mediator.Send(new CreateDeliveryPersonCommand(model.Name, model.Cnpj, model.BirthDate, model.CnhNumber, model.CnhType));
            
            if (!result.IsSuccess)
            {
                ModelState.AddModelError("", result.Error);
                return View(model);
            }
            
            HttpContext.Session.SetString(UserData.UserCNPJ, model.Cnpj);
            return RedirectToAction("Index", "Home", new { area = "Delivery", cnpj = model.Cnpj});
        }

    }
}
