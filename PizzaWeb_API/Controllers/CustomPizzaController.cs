using Microsoft.AspNetCore.Mvc;
using PizzaWeb_API.Models.Handlers;
using System.Text.Json;

namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class CustomPizzaController : Controller
    {

        [HttpGet]
        public IActionResult Get(int option)
        {
            switch (option)
            {
                case 1: //Sauces                  
                    return Ok(JsonSerializer.Serialize(CustomPizzaHandler.GetSauces()));
                case 2: //Cheeses                    
                    return Ok(JsonSerializer.Serialize(CustomPizzaHandler.GetCheeses()));
                case 3://Vegetables
                    return Ok(JsonSerializer.Serialize(CustomPizzaHandler.GetVegetables()));
                case 4://Toppings                  
                    return Ok(JsonSerializer.Serialize(CustomPizzaHandler.GetToppings()));
            }
            return BadRequest();
        }
    }
}
