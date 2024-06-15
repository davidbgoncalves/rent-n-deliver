using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;
using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;
using RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Controllers
{
    [Area("Rental")]
    public class MotorcyclesController(IMediator mediator) : Controller
    {
        // GET: MotorcyclesController
        public async Task<ActionResult> Index(string? licensePlate = null)
        {
            var motorcycleDtoList = await mediator.Send(new GetMotorcycleListQuery(licensePlate));
            if (motorcycleDtoList.Count == 0)
            {
                return View(Enumerable.Empty<Motorcycle>());
            }
            var motorcycleModelList = motorcycleDtoList.Select(dto => dto.ToModel());
            return View(motorcycleModelList);
        }
        
        // GET: MotorcyclesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MotorcyclesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Motorcycle motorcycleModel)
        {
            if (!ModelState.IsValid)
            {
                return View("Create", motorcycleModel);
            }
            var result = await mediator.Send(new CreateMotorcycleCommand(motorcycleModel.Year, motorcycleModel.Model, motorcycleModel.LicensePlate));
            if (!result.IsSuccess)
            {
                ModelState.AddModelError("LicensePlate", result.Error);
                return View("Create", motorcycleModel);
            }
            
            return RedirectToAction(nameof(Index));
        }

        // GET: MotorcyclesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MotorcyclesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MotorcyclesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MotorcyclesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
