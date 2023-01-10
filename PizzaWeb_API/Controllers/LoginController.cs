using Microsoft.AspNetCore.Mvc;
using PizzaWeb_API.Models.Handlers;
using PizzaWeb_API.Models.Objects;

namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        //The process of extracting data from JSON String and pass them into the parameters down here
        //is called MODEL BINDING. This process takes place when a user sends a HTTP REQUEST, with 
        //some data in it. You really should find out more about it.
        public IActionResult Post([FromBody] Account accLogin)
        {
            bool isValid = AccountHandler.CheckAccountLogin(accLogin);
            if (isValid) return Ok();
            else return Conflict(new { message = $"An existing record with the username '{accLogin.Username}' was already found." });
        }
    }
}
