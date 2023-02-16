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

        //Returns a full list of Pizza Ingredients, in just 1 call.
        //For this time, I will be using asynchronous programming, which will help ASP.NET processes
        //requests sequentially. 
        //Why do I have to force it to do so? This is because of the CustomPizzaDbContext, as essentially,
        //it only allows ONLY 1 REQUEST TO BE PROCESSED AT A TIME. In the meantime, the request sent from
        //REACT comes AT A SAME TIME, and if we don't put them in ASYNC, 4 cases below will be run AT
        //THE SAME TIME, WHICH IS FORBIDDEN FOR THE CustomPizzaDbContext.
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
