using System.ComponentModel.DataAnnotations;

namespace PizzaWeb_API.Models
{
    public class Account
    {
        [Key] public int Id { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
