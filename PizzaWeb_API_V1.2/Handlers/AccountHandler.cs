﻿using Microsoft.Data.SqlClient;
using PizzaWeb_API.Models;
using System.Data;
namespace PizzaWeb_API.Handlers
{
    public class AccountHandler
    {
        private static List<Account> accountList = new List<Account>();
        //A connection string contains information that helps this Web API
        //connect to a Database (e.g. Server name, database name...)
        private static string connectionStr = @"server=VIETANHODYSSEY\VATHUGLIFE;database=PizzaDB;
                                                User Id=sa;Password=12345;TrustServerCertificate=True";

        private static List<Dictionary<string, string>> dummyUserData = new List<Dictionary<string, string>>();
        private static bool isLoaded = false;

        private static bool CheckDuplicateUsername(Account targetAcc)
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
        public static int AddAccount(Account newAccount)
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

        //returns the Id of the detected account, if found any.
        public static int CheckAccount(Account targetAccount)
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

                    int userId = Convert.ToInt32(returnParameter.Value);
                    connection.Close();
                    return userId;
                }

            }
        }


        private static void AddData()
        {
            if (isLoaded == false)
            {
                isLoaded = true;
                dummyUserData.Add(new Dictionary<string, string>() { { "Hello World", "1" } });
                dummyUserData.Add(new Dictionary<string, string>() { { "facking well shiet", "2" } });
                dummyUserData.Add(new Dictionary<string, string>() { { "Lmao hahaha", "3" } });
                dummyUserData.Add(new Dictionary<string, string>() { { "Pizza super idol", "4" } });
            }

        }

        //Retrieves the data of a specific user, for example: ordered pizzas, sauces, additional options...
        //For now, the data will be the dummy list above.
        public static bool CheckAccByID(int userId)
        {
            int inputUserId = userId;
            
            using (SqlConnection connection = new SqlConnection(connectionStr))
            {
                //SqlCommand executes a created stored procedure.
                using (SqlCommand command = new SqlCommand("CheckAccByID", connection))
                {
                    
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@inputUserID", inputUserId);                    

                    //Gets the returned value from SQL using ParameterDirection.ReturnValue, then
                    //assigns it to the returnParameter.
                    var returnParameter = command.Parameters.Add("@matches", SqlDbType.Int);
                    returnParameter.Direction = ParameterDirection.ReturnValue;


                    connection.Open();
                    int index = command.ExecuteNonQuery();
                    connection.Close();
                    int queryResult = Convert.ToInt32(returnParameter.Value);
                    if (queryResult == 0) return false;
                    else return true;
                    
                    
                }

            }

        }
    }
}
