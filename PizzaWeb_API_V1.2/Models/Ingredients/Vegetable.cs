namespace PizzaWeb_API.Models.Ingredients
{
    public class Vegetable
    {
        public int Id { get; set; } //THIS IS A MUST WHEN INTERACTING WITH DATABASES!
        public string? name { get; set; }
        public double? price { get; set; }
    }
}
