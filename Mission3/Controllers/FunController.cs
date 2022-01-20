using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Controllers
{
    public class FunController : Controller
    {
        public IActionResult Index()
        {
           

            return View();
        }
        
        public IActionResult Calc()
        {
            return View();
        }
    
    }
}
