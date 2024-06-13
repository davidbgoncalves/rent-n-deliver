using Microsoft.AspNetCore.Mvc;
using RentNDeliver.Web.Areas.Rental.Models.Motorcycles;

namespace RentNDeliver.Web.Areas.Rental.Controllers
{
    [Area("Rental")]
    public class MotorcyclesController : Controller
    {
        // GET: MotorcyclesController
        public ActionResult Index()
        {
            var list = new List<Motorcycle>();
            list.Add(new Motorcycle(Guid.NewGuid(), 2023, "Interceptor 650", "FSJ4I52", DateTime.Now, null));
            return View(list);
        }

        // GET: MotorcyclesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MotorcyclesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MotorcyclesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
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
