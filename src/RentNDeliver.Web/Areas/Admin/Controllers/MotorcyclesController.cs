using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.Motorcycles.Commands.CreateMotorcycle;
using RentNDeliver.Application.Motorcycles.Commands.DeleteMotorcycle;
using RentNDeliver.Application.Motorcycles.Commands.UpdateMotorcycle;
using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleById;
using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;
using RentNDeliver.Web.Areas.Admin.Models.Motorcycles;

namespace RentNDeliver.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
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
            var motorcycleModelList = motorcycleDtoList.Select(dto => dto.ToMotorcycleModel());
            return View(motorcycleModelList);
        }
        
        // GET: MotorcyclesController/Create
        public ActionResult Create()
        {
            return View(new CreateMotorcycle());
        }

        // POST: MotorcyclesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(CreateMotorcycle motorcycleModel)
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
        public async Task<ActionResult> Edit(Guid id)
        {
            var motorcycleDto = await mediator.Send(new GetMotorcycleByIdQuery(id));
            return motorcycleDto != null ? View(motorcycleDto.ToEditMotorcycleModel()) : View();
        }

        // POST: MotorcyclesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(Guid id, EditMotorcycle motorcycleModel)
        {
            if (!ModelState.IsValid)
            {
                return View("Edit", motorcycleModel);
            }
            var result = await mediator.Send(new UpdateMotorcycleCommand(motorcycleModel.Id, motorcycleModel.LicensePlate));
            if (!result.IsSuccess)
            {
                ModelState.AddModelError("LicensePlate", result.Error);
                return View("Edit", motorcycleModel);
            }
            
            return RedirectToAction(nameof(Index));
        }
        
        // POST: MotorcyclesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Delete(Guid id)
        {
            if (id == Guid.Empty)
                return BadRequest();

            var commandResult = await mediator.Send(new DeleteMotorcycleCommand(id));
            if (!commandResult.IsSuccess)
                return BadRequest(commandResult.Error);
            
            return Ok();
        }
    }
}
