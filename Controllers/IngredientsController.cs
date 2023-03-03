using Microsoft.AspNetCore.Mvc;
using PizzaWeb_API.Interfaces;
using System.Text.Json;

namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class IngredientsController : Controller
    {
        private readonly IIngredientsHandler _pizzaHandler;
        public IngredientsController(IIngredientsHandler pizzaHandler) { 
            _pizzaHandler= pizzaHandler;
        }
     
        [HttpGet]
        public IActionResult Get()
        {

            string result = _pizzaHandler.GetAll();
            if (result != null)
            {
                return Ok(result);
            }
            else {
                return BadRequest(new {message = "Something went wrong. Please try again later."});
            }
            
        }

    }
}
