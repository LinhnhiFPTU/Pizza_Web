namespace PizzaWeb_API.Models.Objects.Ingredients
{
    public class Topping
    {
        public int Id { get; set; } //THIS IS A MUST WHEN INTERACTING WITH DATABASES!
        public string? toppingName { get; set; }
        public double? price { get; set; }
    }
}
