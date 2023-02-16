namespace PizzaWeb_API.Models.Objects.Ingredients
{
    public class Sauce
    {
        public int Id { get; set; } //THIS IS A MUST WHEN INTERACTING WITH DATABASES!
        public string? sauceName { get; set; }
        public double? price { get; set; }
    }
}
