using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proacademy.Domain.Entities
{
    public class Enrollment
    {
        [Key]
        public int Id { get; set; }
        
        public int UserId { get; set; }
        
        [ForeignKey("UserId")]
        public user User { get; set; }

        public int CourseId { get; set; }
        
        [ForeignKey("CourseId")]
        public Course Course { get; set; }

        public DateTime EnrollDate { get; set; }
        
        public string Status { get; set; }
    }
}
