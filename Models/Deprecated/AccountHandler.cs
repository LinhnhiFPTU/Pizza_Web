using Microsoft.Data.SqlClient;
using PizzaWeb_API.Contexts;
using PizzaWeb_API.Interfaces;
using PizzaWeb_API.Models.Objects;
using System.Data;
namespace PizzaWeb_API.Models.Handlers
{
    public class AccountHandler:IAccountHandler
    {
        private static List<Account> accountList = new List<Account>();
        //A connection string contains information that helps this Web API
        //connect to a Database (e.g. Server name, database name...)
        private static string connectionStr = @"server=VIETANHODYSSEY-\VATHUGLIFE;database=PizzaDB;
                                                User Id=sa;Password=12345;TrustServerCertificate=True";
        private readonly PizzaDbContext _pizzaDbContext;
        public AccountHandler(PizzaDbContext pizzaDbContext) { 
            _pizzaDbContext = pizzaDbContext;
        }
        private bool CheckDuplicateUsername(Account targetAcc)
        {
            using (SqlConnection connection = new SqlConnection(connectionStr))
            {
                using (SqlCommand command = new SqlCommand("checkDupUser", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@username", targetAcc.Username);
                    command.Parameters.AddWithValue("@email", targetAcc.Email);

                    //Gets the return value (number of matches) from the function.
                    var returnParameter = command.Parameters.Add("@matches", SqlDbType.Int);
                    returnParameter.Direction = ParameterDirection.ReturnValue;

                    connection.Open();
                    int index = command.ExecuteNonQuery();
                    connection.Close();

                    int matches = Convert.ToInt32(returnParameter.Value);
                    if (matches != 0) return true;
                    else return false;
                }
            }
        }
        public int AddAccount(Account newAccount)
        {
            using (SqlConnection connection = new SqlConnection(connectionStr))
            {
                if (CheckDuplicateUsername(newAccount))
                {
                    return -1;
                }
                else
                {
                    //SqlCommand executes a created stored procedure.
                    using (SqlCommand command = new SqlCommand("AddAccount", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@username", newAccount.Username);
                        command.Parameters.AddWithValue("@email", newAccount.Email);
                        command.Parameters.AddWithValue("@password", newAccount.Password);

                        connection.Open();
                        int index = command.ExecuteNonQuery();
                        connection.Close();
                        if (index >= 1) return 1;
                        else return 0;
                    }
                }
            }
        }

        public int CheckAccountLogin(Account targetAccount)
        {
            using (SqlConnection connection = new SqlConnection(connectionStr))
            {
                //SqlCommand executes a created stored procedure.
                using (SqlCommand command = new SqlCommand("CheckAcc", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@username", targetAccount.Username);
                    command.Parameters.AddWithValue("@email", targetAccount.Email);
                    command.Parameters.AddWithValue("@password", targetAccount.Password);

                    //Gets the returned value from SQL using ParameterDirection.ReturnValue, then
                    //assigns it to the returnParameter.
                    var returnParameter = command.Parameters.Add("@matches", SqlDbType.Int);
                    returnParameter.Direction = ParameterDirection.ReturnValue;


                    connection.Open();
                    int index = command.ExecuteNonQuery();

                    int matches = Convert.ToInt32(returnParameter.Value);
                    connection.Close();
                    if (matches != 0) return matches;
                    else return 0;
                }

            }
        }

        public bool CheckAccById(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionStr))
            {
                //SqlCommand executes a created stored procedure.
                using (SqlCommand command = new SqlCommand("CheckAccByID", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@inputUserID", id);                

                    //Gets the returned value from SQL using ParameterDirection.ReturnValue, then
                    //assigns it to the returnParameter.
                    var returnParameter = command.Parameters.Add("@matches", SqlDbType.Int);
                    returnParameter.Direction = ParameterDirection.ReturnValue;


                    connection.Open();
                    int index = command.ExecuteNonQuery();

                    int matches = Convert.ToInt32(returnParameter.Value);
                    connection.Close();
                    if (matches != 0) return true;
                    else return false;
                }

            }
        }

        public string GetAccDetails(int id) {
            var result = _pizzaDbContext.Accounts
                .Where(acc => acc.Id == id)
                .Select(acc => new {acc.Username,acc.Email})   
                .FirstOrDefault();  

            return "";
        }
    }
}
