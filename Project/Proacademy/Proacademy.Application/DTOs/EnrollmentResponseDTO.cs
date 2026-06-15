using System;

namespace Proacademy.Application.DTOs
{
    public class EnrollmentResponseDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string StudentName { get; set; }
        public string StudentEmail { get; set; }
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public DateTime EnrollDate { get; set; }
        public string Status { get; set; }
    }
}
