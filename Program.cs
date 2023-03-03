using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using PizzaWeb_API.Contexts;
using PizzaWeb_API.Handlers;
using PizzaWeb_API.Interfaces;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
//Allows the front-end to bypass CORS policies.

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
            .AllowCredentials()
            .AllowAnyHeader()
            .AllowAnyMethod()
            ; /*tells browsers whether to expose the response to the frontend JavaScript code (React)*/

        });
});


/*
    Register the CustomPizzaHandler as a Scoped Service. For more details, see the DbContext below.
    This is to help ASP.NET Core inject this into the CustomPizzaController, whenever a new request arrives.    
This section teaches ASP.NET Core how to inject the dependencies down below.
*/
builder.Services.AddScoped<IIngredientsHandler, IngredientsHandler>();
builder.Services.AddScoped<IOrderRepository,OrderRepository>();
builder.Services.AddScoped<IAccountHandler,AccountHandler>();


//Register PizzaDbContext as a Scoped Service, using built-in Dependency Injection..
/*
 * Scoped service means: When a new request arrives (call it A) (e.g. Get the Sauces List), 
 * a new instance of the service (PizzaDbContext) will be created JUST FOR THAT REQUEST A.
 */
var connectionString = builder.Configuration.GetConnectionString("PizzaDatabase");
builder.Services.AddDbContext<PizzaDbContext>(options =>
    options.UseSqlServer(connectionString)
);


//Register Authentication as a Service that handles Cookies when a user is logged in.
//CookieAuthenticationOptions: Configure Cookie options (e.g. Timeout, path, ...)
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
   .AddCookie(options =>
   { 
       options.ExpireTimeSpan = TimeSpan.FromMinutes(20);
       options.SlidingExpiration = true;
       options.LoginPath = "/Pizzon/Login";
       
       //Prevents the same site error, preventing from the cookie to be set in the browser.
       //(can be found in the Application tab of the Ctrl Shift I).       
       options.Cookie.SameSite = SameSiteMode.None; 
   }
   );

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();





var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

