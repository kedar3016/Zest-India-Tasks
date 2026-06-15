using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Domain.Entities
{
    public class Course
    {
        public int id { get; set; }

        public string name { get; set; }
        public int duration {  get; set; }
        public double fees{ get; set; }
        public int seatAvailable {  get; set; }
        public string imageUrl {  get; set; }
       
    }
}
