using System;

namespace Proacademy.Application.DTOs
{
    public class CreateEnrollmentDTO
    {
        public int UserId { get; set; }
        public int CourseId { get; set; }
        public string Status { get; set; } = "Active";
    }
}
