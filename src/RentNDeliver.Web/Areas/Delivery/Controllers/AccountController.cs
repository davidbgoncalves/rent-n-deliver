using Microsoft.AspNetCore.Mvc;

namespace RentNDeliver.Web.Areas.Delivery.Controllers
{
    [Area("Delivery")]
    public class AccountController : Controller
    {
        // GET: AccountController
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UpdateDocument()
        {
            return View();
        }

    }
}
