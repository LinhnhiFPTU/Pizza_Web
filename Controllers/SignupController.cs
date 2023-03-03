using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using PizzaWeb_API.Handlers;
using PizzaWeb_API.Interfaces;
using PizzaWeb_API.Models;

namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    //Note: for now, instead of calling the name of the action in the controller, we should only call 
    //the controller's name (Signup). When this is done, based on the request type (GET/POST), The appropriate
    //actions (Get, Post) below will be automatically done.
    public class SignupController : Controller
    {
        private readonly IAccountHandler _accountHandler;
        public SignupController(IAccountHandler accountHandler)
        {
            _accountHandler = accountHandler;
        }

        //The [FromBody] Account account is ModelBinding.
        ///Maybe I should find this out some time in the future...
        [HttpPost]
     
        public IActionResult Post([FromBody] Account account)
        {
            int isAdded = _accountHandler.AddAccount(account);
            if (isAdded == 1) return Ok(new { message = $"Successfully created an account for you!" });
            else if (isAdded == 0) return BadRequest(new { message = $"Something wrong happened and we couldn't create an account for you." });
            else return Conflict(new { message = $"An existing record with the username '{account.Username}' was already found." });
        }
    }
}
