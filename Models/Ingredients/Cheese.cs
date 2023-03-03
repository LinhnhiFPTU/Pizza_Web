using System.ComponentModel.DataAnnotations;

namespace PizzaWeb_API.Models.Ingredients
{
    public class Cheese
    {
        //THIS IS A MUST WHEN INTERACTING WITH DATABASES! Because Id
        //basically means the Primary Key in the database, and a Primary Key
        //MUST NOT BE NULL!
        //Note: the attributes name MUST BE THE SAME as THOSE IN THE DATABASE!
        [Key] public int Id { get; set; }
        public string? name { get; set; }
        public double? price { get; set; }
    }
}
