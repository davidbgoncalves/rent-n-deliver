using Microsoft.AspNetCore.Mvc;

namespace RentNDeliver.Web.Areas.Register.Controllers
{
    public class NewAccountController : Controller
    {
        // GET: NewAccountController
        public ActionResult Create()
        {
            return View();
        }

    }
}
