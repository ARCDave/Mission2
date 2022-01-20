using Microsoft.AspNetCore.Mvc;
using Mission3.Models;

namespace Mission3.Controllers
{
    public class FunController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Calc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calc(CalcModel model)
        {
            return View();
        }

    }
}
