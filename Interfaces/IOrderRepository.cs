using PizzaWeb_API.Models;


namespace PizzaWeb_API.Interfaces
{
    public interface IOrderRepository
    {
        public bool AddOrder(Order newOrder,int AccID);
        public bool RemoveOrder(int OrderID,int AccID);
        public bool UpdateOrder(Order newOrder,int AccID);
        public List<Order> GetOrders(int AccID);   
    }
}
