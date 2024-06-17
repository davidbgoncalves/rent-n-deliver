using MediatR;
using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Application.DeliveryPeople.Commands.CreateDeliveryPerson;
using RentNDeliver.Infrastructure.Services.Storage;
using RentNDeliver.Web.Areas.Register.Models.NewAccount;
using RentNDeliver.Web.Models;

namespace RentNDeliver.Web.Areas.Register.Controllers
{
    [Area("Register")]
    public class NewAccountController(IMediator mediator, MinioService minioService) : Controller
    {
        // GET: NewAccountController
        public ActionResult Index(string cnpj)
        {
            return View(new DeliveryPerson{Cnpj = cnpj});
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Index(DeliveryPerson model, IFormFile cnhImage)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            string imageUrl = string.Empty;
            
            if (cnhImage != null && (cnhImage.ContentType == "image/png" || cnhImage.ContentType == "image/bmp"))
            {
                var objectName = $"{model.Cnpj}/cnh.{Path.GetExtension(cnhImage.FileName)}";
                await using var stream = cnhImage.OpenReadStream();
                imageUrl = await minioService.UploadFileAsync(objectName, stream, cnhImage.Length, cnhImage.ContentType);
            }
            
            var result = await mediator.Send(new CreateDeliveryPersonCommand(model.Name, model.Cnpj, model.BirthDate, model.CnhNumber, model.CnhType, imageUrl));
            
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
