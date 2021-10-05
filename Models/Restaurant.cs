using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Capstone.Models
{
    public class Restaurant
    {
        public int Id { get; set; }

        [Required(ErrorMessage="Name required.")]
        public string Name { get; set; }

        [Required(ErrorMessage="Address required.")]

        public string Address { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string Comments { get; set; }

        public List<Favorite> Favorites { get; set; }
    }
}