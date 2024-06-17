using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.Rentals.Queries.GetMotorcycleRentalsByDeliveryPersonId;
using RentNDeliver.Web.Areas.Delivery.Models.Rentals;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Delivery.Controllers
{
    [Area("Delivery")]
    public class RentalsController(IMediator mediator) : Controller
    {
        // GET: RentalsController
        public async Task<ActionResult> Index()
        {
            var userId = HttpContext.Session.GetString(UserData.UserID);
            if (string.IsNullOrEmpty(userId))
                RedirectToAction("Index", "Home", new { area = "" });
            
            var motorcycleRentalsDtoList = await mediator.Send(new GetMotorcycleRentalsByDeliveryPersonIdQuery(Guid.Parse(userId!)));
            if (motorcycleRentalsDtoList.Count == 0)
            {
                return View(Enumerable.Empty<MotorcycleRental>());
            }
            var motorcycleModelList = motorcycleRentalsDtoList.Select(dto => dto.ToModel());
            return View(motorcycleModelList);
        }
        
        public ActionResult Create()
        {
            return View(new MotorcycleRental());
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(MotorcycleRental model)
        {
            if (!ModelState.IsValid)
                return View(model);
            
            return View();
        }
        
        public ActionResult Return()
        {
            return View();
        }
        
    }
}
