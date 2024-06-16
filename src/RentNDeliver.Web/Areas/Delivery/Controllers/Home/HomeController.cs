using Microsoft.AspNetCore.Mvc;

namespace RentNDeliver.Web.Areas.Delivery.Controllers.Home
{
    [Area("Delivery")]
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }

    }
}
