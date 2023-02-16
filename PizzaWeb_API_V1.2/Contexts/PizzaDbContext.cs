using Microsoft.EntityFrameworkCore;
using PizzaWeb_API.Models;
using PizzaWeb_API.Models.Ingredients;

namespace PizzaWeb_API.Contexts
{
    public class PizzaDbContext:DbContext
    {
        public PizzaDbContext(DbContextOptions<PizzaDbContext> options) : base(options) 
        { 
            
        }  
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Sauce> Sauces { get; set; }
        public DbSet<Topping> Toppings { get; set; }
        public DbSet<Cheese> Cheeses { get; set; }
        public DbSet<Vegetable> Vegetables { get; set; }

    }
}
