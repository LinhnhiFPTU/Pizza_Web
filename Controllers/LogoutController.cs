using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.Diagnostics;
using System.Security.Claims;


namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    
    public class LogoutController : Controller
    {
        [HttpPost]
        public IActionResult Post()
        {            
                //To delete that Cookie, we are actually telling the browser that it is no longer valid,
                //by setting the expiry date to a bullshit value.
                Response.Cookies.Append(".AspNetCore.Cookies", "", new CookieOptions()
                    {
                        Expires = DateTime.Now.AddDays(-1), /*This right here.*/
                        //Bypasses the browser's set-cookie shit.
                        SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None,
                        Secure = true
                    }
                    
                );            
           return Ok();
        }
    }
}
