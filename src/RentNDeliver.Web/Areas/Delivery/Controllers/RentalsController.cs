using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using RentNDeliver.Application.Motorcycles.Queries.GetAvailableMotorcycleToRental;
using RentNDeliver.Application.Rentals.Commands.RentMotorcycle;
using RentNDeliver.Application.Rentals.Commands.ReturnMotorcycle;
using RentNDeliver.Application.Rentals.Queries.GetAvailableRentalPlans;
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
        
        public async Task<ActionResult> Create()
        {
            ViewBag.MotorcycleList = await GetMotorcycleSelectListItems();
            ViewBag.RentalPlanList = await GetRentalPlansSelectListItems();
            var model = new CreateMotorcycleRental();
            return View(model);
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(CreateMotorcycleRental model)
        {
            if (!ModelState.IsValid)
            {
                ViewBag.MotorcycleList = await GetMotorcycleSelectListItems();
                ViewBag.RentalPlanList = await GetRentalPlansSelectListItems();
                return View(model);
            }
            var userId = HttpContext.Session.GetString(UserData.UserID);
            var result = await mediator.Send(new RentMotorcycleCommand(
                model.MotorcycleId, 
                Guid.Parse(userId!),
                model.RentalPlanId, 
                model.ExpectedReturnDate));

            if (!result.IsSuccess)
            {
                ModelState.AddModelError("DeliveryPersonId", result.Error);
                return View(model);
            }
            
            return RedirectToAction(nameof(Index));
        }
        
        public ActionResult Return([FromRoute]Guid id)
        {
            var model = new ReturnMotorcycle
            {
                MotorcycleRentalId = id
            };
            return View(model);
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Return(ReturnMotorcycle model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var result = await mediator.Send(new ReturnMotorcycleCommand(model.MotorcycleRentalId, model.ReturnDate));
            if (!result.IsSuccess)
            {
                ModelState.AddModelError("ReturnDate", result.Error);
                return View(model);
            }
            
            return RedirectToAction(nameof(Index));
        }
        
        private async Task<SelectList> GetRentalPlansSelectListItems()
        {
            //Load RentalPlans
            var rentalPlansDtos = await mediator.Send(new GetAvailableRentalPlansQuery());
            var rentalPlanSelectListItems = (
                    from dto in rentalPlansDtos 
                    let formatedText = $"{dto.Name} - Minimum days:{dto.MinimumNumberOfDays} - DailyCost:{dto.DayCost}" 
                    select new SelectListItem(formatedText, dto.RentalPlanId.ToString()))
                .ToList();
            var rentalPlansAvailable = new SelectList(rentalPlanSelectListItems, "Value", "Text");
            return rentalPlansAvailable;
        }

        private async Task<SelectList> GetMotorcycleSelectListItems()
        {
            //Load Motorcycle available
            var motorcycleAvailablesList = await mediator.Send(new GetAvailableMotorcycleForRentalQuery());
            var motorcycleSelectListItems = (
                    from dto in motorcycleAvailablesList
                    let formatedText = $"License Plate:{dto.LicensePlate} - Model: {dto.Model}"
                    select new SelectListItem(formatedText, dto.Id.ToString()))
                .ToList();
            var motorcyclesAvailable = new SelectList(motorcycleSelectListItems, "Value", "Text");
            return motorcyclesAvailable;
        }
    }
}
