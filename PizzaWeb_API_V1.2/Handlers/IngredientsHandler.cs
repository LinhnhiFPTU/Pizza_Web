using Microsoft.EntityFrameworkCore;
using PizzaWeb_API.Models.Ingredients;
using PizzaWeb_API.Interfaces;
using System.Text.Json;
using PizzaWeb_API.Contexts;

namespace PizzaWeb_API.Handlers
{
    public class IngredientsHandler : IIngredientsHandler
    {
        
        /*
         * Đề xuất: để xử lý nhiều request cùng ập đến cùng lúc, người ta sẽ sử dụng 1 kỹ thuật là ConnectionPooling.
         ConnectionPooling là việc mình tạo trước 1 số lượng connection nhất định, v.d. 100, sau đó lưu chúng vào 1 mảng.
         Khi có một request đến (gọi nó là A), ta sẽ cấp cái connection đó cho request A đó.
         
        Ví dụ thực tế đơn giản.        
        Tưởng tượng mình đang đi thuê phòng ở khách sạn tên là A. Khách sạn A này được người ta xây sẵn 100 phòng.
        100 phòng này chính là 100 cái Connection mình tạo sẵn, và đựng nó trong mảng.
        
        Khi đi thuê, đầu tiên, mình đến lễ tân đặt phòng. 
        Lễ tân sẽ kiểm tra xem, trong 100 phòng đó, có phòng nào trống.
        Nếu có 1 phòng trống (v.d. phòng 69), thì sẽ cho mình vào phòng đó.


        */
        /*Creates a working session with the Pizza Database.                        
        --> private static CustomPizza_dbContext _dbContext = new CustomPizza_dbContext();
        
        DEPRECATED: Don't use the _dbContext like this.
        - This is because, if done so, there is ONLY 1 _dbContext INSTANCE IS CREATED.
        - This means, when multiple requests arrive (e.g. request for Cheeses List, Sauces List)
          AT THE SAME TIME, they will BOMBARD that _dbContext, hence the error 
          (_dbContext instance can't be used inside OnConfiguring...)

        SOLUTION: Given 5 requests, for each of them, CREATE A DISTINCT INSTANCE 
        of _dbContext.
        
        */
        //Gets a list of registered services in program.cs (is this right?)                       
        //A new CustomPizza_dbContext would be injected into this class, whenever it's called.
        //This kind of injection is also called: Constructor injection (Inject at the Constructor).

        private readonly PizzaDbContext _dbContext;
        public IngredientsHandler(PizzaDbContext dbContext)
        {
            _dbContext = dbContext; //Inject the context from the outside (ASP.NET Services) to the inside of this Handler.
        }
        private List<Sauce> GetSauces()
        {
            string query = "SELECT Id,name,price FROM Sauces";
            List<Sauce> sauces = _dbContext.Sauces.FromSqlRaw(query).ToList();
            return sauces;
        }

        private List<Cheese> GetCheeses()
        {
            string query = "SELECT id,name,price FROM Cheeses";
            List<Cheese> cheeses = _dbContext.Cheeses.FromSqlRaw(query).ToList();
            return cheeses;
        }
        private List<Topping> GetToppings()
        {

            string query = "SELECT id,name,price FROM Toppings";
            List<Topping> toppings = _dbContext.Toppings.FromSqlRaw(query).ToList();
            return toppings;

        }
        private List<Vegetable> GetVegetables()
        {
            string query = "SELECT id,name,price FROM Vegetables";
            List<Vegetable> vegies = _dbContext.Vegetables.FromSqlRaw(query).ToList();
            return vegies;

        }
        public string GetAll()
        {
            /*
             * This list contains 4 lists of ingredients (sauce, cheese, toppings, vegetables).
             * To do so (add 4 lists into a single list "resultList", 
             * we need to treat each list as objects, and resultList as 
             * 
             */
            List<object> resultList = new List<object>();
            var sauceList = GetSauces();
            var cheeseList = GetCheeses();
            var toppingsList = GetToppings();
            var vegetableList = GetVegetables();

            resultList.Add(sauceList);
            resultList.Add(cheeseList);
            resultList.Add(toppingsList);
            resultList.Add(vegetableList);
            return JsonSerializer.Serialize(resultList);

        }
    }
}
