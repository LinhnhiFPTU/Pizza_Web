using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

using System.Text.Json;
using PizzaWeb_API.Interfaces;
using PizzaWeb_API.Models;
using System.Diagnostics;
using System.Security.Claims;

namespace PizzaWeb_API.Controllers
{
    /*For more details about how user can get data from the Server based on the cookie, enter this link:
     * https://www.geeksforgeeks.org/session-vs-token-based-authentication/
     */
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class LoginController : Controller
    {
        private readonly IAccountHandler _accountHandler;
        public LoginController(IAccountHandler accountHandler) { 
            _accountHandler = accountHandler;   
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Account accLogin)
        {
            int userId = _accountHandler.CheckAccountLogin(accLogin);
            
            if (userId == 0)
                return Conflict(new { message = $"Username '{accLogin.Username}' was not found. Please consider creating a new account first." });

            
            //Step 1: Generates a cookie for that user
            /*Giải thích phần Claim (bắt đầu từ trên xuống dưới):
                - ClaimsPrinciple: 1 MÔI TRƯỜNG bảo mật (security context) của người dùng. Hiểu đơn giản, đây là 1 NGƯỜI DÙNG. 
                - ClaimsIdentity: 1 món đồ, 1 vật thể dùng để xác định người đó là AI. Ví dụ: thẻ CCCD, bằng lái xe, BHYT...
                - Claims: Từng thông tin bên trong món đồ/vật thể để xác định người đó là AI. Ví dụ: trong thẻ CCCD có tên, ngày tháng năm sinh,...
            */
            var claims = new List<Claim>
            {
                    
                new Claim(ClaimTypes.NameIdentifier,userId.ToString())   
            };
            var claimsIdentity = new ClaimsIdentity(claims,CookieAuthenticationDefaults.AuthenticationScheme);
            var authProperties = new AuthenticationProperties
            {
                AllowRefresh = true,
                
            };
            
            //After this runs, a cookie is added to the HttpResponse. Then, that cookie will be saved in the browser/application.
            //Within the cookie's allowed duration, for each endpoint called in this API, that cookie will be sent from the Front-end.          
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity),authProperties);            
            
            
            
            return Ok();            
            
        }

        [HttpGet]
        //Checks if the requested token is valid (e.g. already existed in the HttpRequest sent by the browser, or hasn't expired yet).
        //If not, this means the user is not logged in.
        public IActionResult Get()
        {

            int ParsedUserId = 0;            
            try
            {
                var ReceivedUserID = HttpContext.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier);
                ParsedUserId = Int32.Parse(ReceivedUserID.Value);
                bool isUserFound = _accountHandler.CheckAccById(ParsedUserId);
                if (isUserFound == false)
                {
                    return BadRequest(new { message = "User does not exist!" });
                }                                

            }
            catch (Exception e)
            {
                Debug.WriteLine(e.ToString());
                return BadRequest(new { message = "User might not be logged in, or some bullshits might have just happened." });
            }
            
            string userDetails = _accountHandler.GetAccDetails(ParsedUserId);   
            return Ok(userDetails);

        }
    }
}
