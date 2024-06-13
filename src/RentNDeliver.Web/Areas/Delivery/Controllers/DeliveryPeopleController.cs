using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace RentNDeliver.Web.Areas.Delivery.Controllers;

[Area("Delivery")]
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