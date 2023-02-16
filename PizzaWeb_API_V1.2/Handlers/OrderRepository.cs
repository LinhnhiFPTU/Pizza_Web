using PizzaWeb_API.Models;
using PizzaWeb_API.Interfaces;
using PizzaWeb_API.Contexts;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Collections;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PizzaWeb_API.Handlers
{
    //OrderRepository is a class that handles the Pizza Order logic (e.g.add an order, remove an order...)
    //This class must implement whatever is stated inside the IOrderRepository Contract (or Interface.)

    public class OrderRepository : IOrderRepository
    {
        private PizzaDbContext _pizzaDbContext;
        
        
        /*WHENEVER A NEW REQUEST ARRIVES, A NEW INSTANCE OF 
         * OrdersDbContext, AND A NEW INSTANCE OF AccountDbContext WILL BE INJECTED 
         * into this OrderRepository.*/
        public OrderRepository(PizzaDbContext pizzaDbContext) {
            _pizzaDbContext = pizzaDbContext;
        }
        public bool AddOrder(Order newOrder, int AccId) {
            bool result = false;
            SqlParameter[] parameters = new SqlParameter[] {
                new SqlParameter("name",newOrder.Name),
                new SqlParameter("address",newOrder.Address),
                new SqlParameter("phone",newOrder.Phone),
                new SqlParameter("sauce",newOrder.Sauce),
                new SqlParameter("cheese",newOrder.Cheese),
                new SqlParameter("topping",newOrder.Topping),
                new SqlParameter("vegetables",newOrder.Vegetables),
                new SqlParameter("accId",AccId),
                new SqlParameter("isAdded",SqlDbType.Int)
                {
                    Direction = System.Data.ParameterDirection.Output,
                }
            };
            //This sacrilegeous shit is called: LINQ Query. This is how you execute SQL queries, using Entity Framework Core.
            var sqlCommand = "AddOrderByID " + String.Join(", ", parameters.Select(x =>
            $"@{x.ParameterName} = @{x.ParameterName}" +
            (x.Direction == ParameterDirection.Output ? " OUTPUT" : "")
            ));

            _pizzaDbContext.Database.ExecuteSqlRaw(sqlCommand, parameters);
            int outputId = (int)(parameters.First(p => p.Direction == ParameterDirection.Output).Value);
            if (outputId == 1)
            {
                result = true;
            }

            return result;

        }
        public bool RemoveOrder(int OrderID, int AccID)
        {
            var orderToDelete = _pizzaDbContext.Orders
                  .Join(_pizzaDbContext.Accounts, ord => ord.AccID,
                        acc => acc.Id, (ord, acc) => new
                        {
                            orderId = ord.OrderId,
                            accId = acc.Id,
                            name = ord.Name,
                            address = ord.Address,
                            phone = ord.Phone,
                            sauce = ord.Sauce,
                            cheese = ord.Cheese,
                            topping = ord.Topping,
                            vegetables = ord.Vegetables,
                            username = acc.Username,
                            email = acc.Email,

                        }).Where(tempTable => tempTable.accId == AccID && tempTable.orderId == OrderID)
                          .Select(tempTable => new Order()
                          {
                              OrderId = tempTable.orderId,
                              AccID = tempTable.accId,
                              Name = tempTable.name,
                              Address = tempTable.address,
                              Phone = tempTable.phone,
                              Sauce = tempTable.sauce,
                              Cheese = tempTable.cheese,
                              Topping = tempTable.topping,
                              Vegetables = tempTable.vegetables,
                          }).FirstOrDefault();


            if (orderToDelete == null)
                return false;

            //Steps to delete a record in Order table in PizzaDb database.
            _pizzaDbContext.Attach(orderToDelete);
            _pizzaDbContext.Orders.Remove(orderToDelete);
            _pizzaDbContext.SaveChanges();
            return true;
        }
        public List<Order> GetOrders (int AccID){
            int enteredId = AccID;
            //This technique is called: Execute a SQL Query with EF Core, then returns the result in a list of Orders.
            List<Order> resultList = _pizzaDbContext.Orders
            .Join(_pizzaDbContext.Accounts, ord => ord.AccID,
                  acc => acc.Id, (ord, acc) => new
                  {
                      orderId = ord.OrderId,
                      accId = acc.Id,
                      name = ord.Name,
                      address = ord.Address,
                      phone = ord.Phone,
                      sauce = ord.Sauce,
                      cheese = ord.Cheese,
                      topping = ord.Topping,
                      vegetables = ord.Vegetables,
                      username = acc.Username,
                      email = acc.Email,

                  }).Where(tempTable => tempTable.accId == enteredId)
                    .Select(tempTable => new Order()
                    {
                        OrderId = tempTable.orderId,
                        AccID = tempTable.accId,
                        Name = tempTable.name,
                        Address = tempTable.address,
                        Phone = tempTable.phone,
                        Sauce = tempTable.sauce,
                        Cheese = tempTable.cheese,
                        Topping = tempTable.topping,
                        Vegetables = tempTable.vegetables,
                    }).ToList();

            return resultList;
        }
        public bool UpdateOrder(Order currentOrder, int AccID) {
            var orderToUpdate = _pizzaDbContext.Orders
                  .Join(_pizzaDbContext.Accounts, ord => ord.AccID,
                        acc => acc.Id, (ord, acc) => new
                        {
                            orderId = ord.OrderId,
                            accId = acc.Id,
                            name = ord.Name,
                            address = ord.Address,
                            phone = ord.Phone,
                            sauce = ord.Sauce,
                            cheese = ord.Cheese,
                            topping = ord.Topping,
                            vegetables = ord.Vegetables,
                            username = acc.Username,
                            email = acc.Email,

                        }).Where(tempTable => tempTable.accId == AccID && tempTable.orderId == currentOrder.OrderId)
                          .Select(tempTable => new Order()
                          {
                              OrderId = tempTable.orderId,
                              AccID = tempTable.accId,
                              Name = tempTable.name,
                              Address = tempTable.address,
                              Phone = tempTable.phone,
                              Sauce = tempTable.sauce,
                              Cheese = tempTable.cheese,
                              Topping = tempTable.topping,
                              Vegetables = tempTable.vegetables,
                          }).FirstOrDefault();
            if(orderToUpdate== null)
                return false;
            //The update order section.
            orderToUpdate.Name = currentOrder.Name;
            orderToUpdate.Address = currentOrder.Address;
            orderToUpdate.Phone = currentOrder.Phone;
            orderToUpdate.Sauce = currentOrder.Sauce;
            orderToUpdate.Cheese = currentOrder.Sauce;
            orderToUpdate.Topping = currentOrder.Topping;
            orderToUpdate.Vegetables = currentOrder.Vegetables;
            
            //Steps to update existing Order with new Data.
            _pizzaDbContext.Attach(orderToUpdate);
            _pizzaDbContext.Update(orderToUpdate);
            _pizzaDbContext.SaveChanges();
            return true;
        }

    }
}
