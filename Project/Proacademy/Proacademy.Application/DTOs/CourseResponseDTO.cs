using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.DTOs
{
    public class CourseResponseDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Duration { get; set; }

        public double Fees { get; set; }

        public int SeatsAvailable { get; set; }

        public string ImageURL { get; set; }
    }
}
