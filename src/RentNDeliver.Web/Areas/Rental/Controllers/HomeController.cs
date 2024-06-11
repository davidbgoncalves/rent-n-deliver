using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace RentNDeliver.Web.Areas.Rental.Controllers;

[Area("Rental")]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}