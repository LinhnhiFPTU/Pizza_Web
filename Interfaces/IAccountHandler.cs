using PizzaWeb_API.Models;

namespace PizzaWeb_API.Interfaces
{
    public interface IAccountHandler
    {
        public int AddAccount(Account newAccount);
        public int CheckAccountLogin(Account targetAccount);
        public string GetAccDetails(int id);
        public bool CheckAccById(int userId);
    }
}
