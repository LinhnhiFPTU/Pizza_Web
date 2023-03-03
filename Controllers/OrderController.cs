using Microsoft.AspNetCore.Mvc;
using PizzaWeb_API.Models;
using System.Security.Claims;
using PizzaWeb_API.Handlers;
using System.Diagnostics;
using PizzaWeb_API.Interfaces;
using System.Text.Json;
namespace PizzaWeb_API.Controllers
{
    [ApiController]
    [Route("Pizzon/[controller]")]
    public class OrderController : Controller
    {
        /*Meaning: When a request arrives, a NEW INSTANCE of OrderRepository will be injected into this Controller.
         This helps us work with the database, AND, make the OrderController INDEPENDENT from the OrderRepository*/
        private readonly IOrderRepository _orderRepository; //This is basically an object of WHATEVER TYPE,
                                                            //AS LONG AS it follows items stated inside the IOrderRepository.        
        private readonly IAccountHandler _accountHandler;
        public OrderController(IOrderRepository orderRepository, IAccountHandler accountHandler)
        {
            _orderRepository = orderRepository;
            _accountHandler = accountHandler;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Order newOrder)
        {
            /*Workflow:
             - When a request arrives, this will check if any user is logged in, based on the Cookie existing in the request.
             - If there is no cookie found, or the cookie is invalid, this will return a bad error.
             - If there is a cookie found, do these steps:
             + Decrypt the cookie and get the userId.
             + Adds a new order to the database, based on that userID.
             */
            int ParsedUserId = 0;
            try
            {
                var ReceivedUserID = HttpContext.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier);
                                                
                //Right down below here, the Guard Clauses technique is used. For more details, please Google Search this shit.
                ParsedUserId = Int32.Parse(ReceivedUserID.Value);
                bool isUserFound = _accountHandler.CheckAccById(ParsedUserId);
                if (isUserFound == false) {
                    return BadRequest(new { message = "User does not exist!" });
                }
                bool isOrderAdded = _orderRepository.AddOrder(newOrder,ParsedUserId);
                if (isOrderAdded == false) {
                    return StatusCode(500,new { message = "Something went wrong on the Server side. Please be patient!", isAdded = 1 });
                }
               
            }catch(Exception ex)
            {
                Debug.WriteLine(ex.ToString());
                return BadRequest(new { message = "User might not be logged in, or some bullshits might have just happened.", isAdded = 1 });

            }
            
            
            return Ok(new { message = "An order for the user with id " + ParsedUserId + " will be added." ,isAdded = 1});
        }
        [HttpGet]
        public IActionResult Get() {

            int ParsedUserId = 0;
            string result = "";
            try
            {
                var ReceivedUserID = HttpContext.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier);
                ParsedUserId = Int32.Parse(ReceivedUserID.Value);
                bool isUserFound = _accountHandler.CheckAccById(ParsedUserId);
                if (isUserFound == false)
                {
                    return BadRequest(new { message = "User does not exist!" });
                }
                var testResult = _orderRepository.GetOrders(ParsedUserId);
                if (testResult!=null){
                    result = JsonSerializer.Serialize(testResult);
                }

            }
            catch (Exception e) {
                Debug.WriteLine(e.ToString());
                return BadRequest(new { message = "User might not be logged in, or some bullshits might have just happened." });
            }
            return Ok(result);
        
        }
        [HttpDelete]
        public IActionResult Delete(int orderId) {
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
                bool isDeleted = _orderRepository.RemoveOrder(orderId, ParsedUserId);
                if (isDeleted == false) {

                    return StatusCode(500, new { message = "Something went wrong on the Server side. Please be patient!" });
                }
            }
            catch (Exception ex) { 
                Debug.WriteLine(ex.ToString());
            
            }
            
            return Ok(new { message = "Successfully deleted orderId " + orderId + " of accountId " + ParsedUserId+"." });
        }

        /*The workflow to update an existing Order (record):
         * Create instance for DbContext class
            Retrieve entity by key
            Make changes on entity's properties
            Save changes*/
        [HttpPut]
        public IActionResult Update([FromBody]Order currentOrder) {
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
                bool isUpdated = _orderRepository.UpdateOrder(currentOrder,ParsedUserId);
                if (isUpdated == false) {
                    return StatusCode(500, new { message = "Something went wrong on the Server side. Please be patient!" });
                }
            }
            catch (Exception ex) {
                Debug.WriteLine(ex.ToString());
            }
            return Ok(new { message = "Successfully updated orderId " + currentOrder.OrderId + " of accountId " + ParsedUserId + "." });
        }
    }
}
