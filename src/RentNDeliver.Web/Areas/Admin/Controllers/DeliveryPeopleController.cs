using Microsoft.AspNetCore.Mvc;

namespace RentNDeliver.Web.Areas.Admin.Controllers;

[Area("Admin")]
public class DeliveryPeopleController : Controller
{
    private readonly ILogger<DeliveryPeopleController> _logger;

    public DeliveryPeopleController(ILogger<DeliveryPeopleController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}