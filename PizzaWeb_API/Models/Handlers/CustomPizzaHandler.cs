using Microsoft.EntityFrameworkCore;
using PizzaWeb_API.Models.Contexts;
using PizzaWeb_API.Models.Objects.Ingredients;

namespace PizzaWeb_API.Models.Handlers
{
    public class CustomPizzaHandler
    {
        //Creates a working session with the Pizza Database.                        
        private static CustomPizzaDbContext dbContext = new CustomPizzaDbContext();
        public static List<Sauce> GetSauces()
        {
            //Selecting Id (Primary Keys) IS A MUST!
            string query = "SELECT Id,sauceName,price FROM Sauces";
            return dbContext.Sauces.FromSqlRaw(query).ToList();
        }

        public static List<Cheese> GetCheeses()
        {
            string query = "SELECT id,cheeseName,price FROM Cheeses";
            return dbContext.Cheeses.FromSqlRaw(query).ToList();

        }
        public static List<Topping> GetToppings()
        {
            string query = "SELECT id,toppingName,price FROM Toppings";
            return dbContext.Toppings.FromSqlRaw(query).ToList();
        }
        public static List<Vegetable> GetVegetables()
        {
            string query = "SELECT id,vegetableName,price FROM Vegetables";
            return dbContext.Vegetables.FromSqlRaw(query).ToList();
        }
    }
}
