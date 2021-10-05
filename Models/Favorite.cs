namespace Capstone.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
    }
}