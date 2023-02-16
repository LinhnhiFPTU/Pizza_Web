using System.ComponentModel.DataAnnotations;

namespace PizzaWeb_API.Models
{
    public class Order
    {
        [Key] public int OrderId { get; set; }       
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Sauce { get; set; }
        public string? Cheese { get; set; } 
        public string? Topping { get; set; }
        public string? Vegetables { get; set; } 
        public int AccID { get; set; }  


        
    }
}
