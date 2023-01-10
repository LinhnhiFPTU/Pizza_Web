namespace PizzaWeb_API.Models.Objects.Ingredients
{
    public class Vegetable
    {
        public int Id { get; set; } //THIS IS A MUST WHEN INTERACTING WITH DATABASES!
        public string? vegetableName { get; set; }
        public double? price { get; set; }
    }
}
