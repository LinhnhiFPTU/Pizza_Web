
using Microsoft.EntityFrameworkCore;
using PizzaWeb_API.Models.Objects.Ingredients;

namespace PizzaWeb_API.Models.Contexts
{
    //Entity Framework Core is another way of getting data from SQL Server Database.
    //
    //What I know so far, is that, this thing is pretty much the same as what we   
    //have done with AccountHandler and SessionHandler:
    // Create procedure in SQL Server -> Call that procedure from ASP.NET CORE -> Yields results.
    // I think that by using Entity Framework Core, that process will become much easier.    

    /*
     * 2nd note: A dbContext is an INSTANCE OF A DATABASE. In other words, we create a copy of 
     * our current database (PizzaDB) then modify it in whatever way we want. 
     * After that, we will update it to the actual database.
       Or in another words, A dbContext is a piece of code that sets out a session (amount of time)
        for us to work (interact) with the SQL Database.*/


    public class CustomPizzaDbContext : DbContext
    {
        private string connectionStr = @"server=VIETANHODYSSEY-\VATHUGLIFE;database=PizzaDB;
                                                User Id=sa;Password=12345;TrustServerCertificate=True";

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with the connection string above.
            options.UseSqlServer(connectionStr);

        }

        /*Up until now, for this CustomPizzaDbContext, there are 4 tables we are caring about:
        
           - Sauces, Toppings, Cheese, and Vegetables.
        That's why our main task is to add them to this DbContext, to actually update and get info from them.
         */

        /*A table that contains 1 of 3 ingredients. Depending on the request, this MUST only contain 1 of these 
        3 types of ingredients: Sauces, Toppings and Cheeses. */

        public DbSet<Sauce> Sauces { get; set; }
        public DbSet<Topping> Toppings { get; set; }
        public DbSet<Cheese> Cheeses { get; set; }
        public DbSet<Vegetable> Vegetables { get; set; }



    }
}
