using Microsoft.AspNetCore.Mvc;

namespace RentNDeliver.Web.Areas.Register.Controllers
{
    [Area("Register")]
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }

    }
}
