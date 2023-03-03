using Microsoft.AspNetCore.Mvc;
using PizzaWeb_API.Handlers.Deprecated;
using PizzaWeb_API.Models;

namespace PizzaWeb_API.Controllers.Deprecated
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class OldLoginController : Controller
    {
        [HttpPost]
        //The process of extracting data from JSON String and pass them into the parameters down here
        //is called MODEL BINDING. This process takes place when a user sends a HTTP REQUEST, with 
        //some data in it. You really should find out more about it.
        public IActionResult Post([FromBody] Account accLogin)
        {
            //int userId = AccountHandler.CheckAccount(accLogin);
            int userId = 0;
            if (userId == 0)
                return Conflict(new { message = $"Username '{accLogin.Username}' was not found. Please consider creating a new account first." });

            var jwt = OldSessionHandler.GenerateSessionId(userId);
            Response.Cookies.Append(key: "jwt", value: jwt, new CookieOptions
            {
                HttpOnly = true
            });
            return Ok(new { message = "successfully logged in!" });
        }

        /* ---------------------------------------------------------- */
        // We wouldnt do this in real life, we use something call a guard or a middleware to handle authentication.
        // This should be a middleware instead of a GetRequest.
        // Anything that requires authentication should be protected behind a Guard.
        // Removing the need to repeat the logic multiple time in code.
        /* ---------------------------------------------------------- */

        //This function verifies if the given token is valid. If success, the data of the user
        //(e.g. in Facebook, that would be feed data...) based on their Id will be returned.
        /* For context, this is the process in a nutshell: 
         * -> User signs in successfully -> Backend (ASP) gives front-end (React) a token (call it A token)
         * -> For each site visited (e.g. Pizza Ordering page, Payment page,...), Client will send A token
         * to Back-end for confirmation 
         * -> If success, the Back-end will provide appropriate contents to that user 
         * based on their logged in account.
         */
        [HttpGet]
        public IActionResult Get()
        {
            //In React's response, get to the cookies section.
            //In that section, get the value of the key named "jwt"
            //(basically, we are getting the jwt token from the client
            //to confirm that with the back-end.
            var clientJwt = Request.Cookies["jwt"];
            if (clientJwt == null)
            {
                return BadRequest();
            }
            var token = OldSessionHandler.VerifySessionId(clientJwt);
            int userId = int.Parse(token.Issuer);
            return Ok();

        }
    }
}
