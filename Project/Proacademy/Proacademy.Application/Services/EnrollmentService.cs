using Proacademy.Application.DTOs;
using Proacademy.Application.Interfaces;
using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Proacademy.Application.Services
{
    public class EnrollmentService : IEnrollmentService
    {
        private readonly IEnrollmentRepository _enrollmentRepository;

        public EnrollmentService(IEnrollmentRepository enrollmentRepository)
        {
            _enrollmentRepository = enrollmentRepository;
        }

        public List<EnrollmentResponseDTO> GetAll()
        {
            return _enrollmentRepository.GetAllWithDetails().Select(e => new EnrollmentResponseDTO
            {
                Id = e.Id,
                UserId = e.UserId,
                StudentName = e.User != null ? e.User.Name : "Unknown",
                StudentEmail = e.User != null ? e.User.Email : "Unknown",
                CourseId = e.CourseId,
                CourseName = e.Course != null ? e.Course.name : "Unknown",
                EnrollDate = e.EnrollDate,
                Status = e.Status
            }).ToList();
        }

        public List<EnrollmentResponseDTO> GetByUserId(int userId)
        {
            return _enrollmentRepository.GetByUserIdWithDetails(userId).Select(e => new EnrollmentResponseDTO
            {
                Id = e.Id,
                UserId = e.UserId,
                StudentName = e.User != null ? e.User.Name : "Unknown",
                StudentEmail = e.User != null ? e.User.Email : "Unknown",
                CourseId = e.CourseId,
                CourseName = e.Course != null ? e.Course.name : "Unknown",
                EnrollDate = e.EnrollDate,
                Status = e.Status
            }).ToList();
        }

        public EnrollmentResponseDTO? GetById(int id)
        {
            var e = _enrollmentRepository.GetByIdWithDetails(id);
            if (e == null)
            {
                return null;
            }

            return new EnrollmentResponseDTO
            {
                Id = e.Id,
                UserId = e.UserId,
                StudentName = e.User != null ? e.User.Name : "Unknown",
                StudentEmail = e.User != null ? e.User.Email : "Unknown",
                CourseId = e.CourseId,
                CourseName = e.Course != null ? e.Course.name : "Unknown",
                EnrollDate = e.EnrollDate,
                Status = e.Status
            };
        }

        public EnrollmentResponseDTO Create(CreateEnrollmentDTO dto)
        {
            var enrollment = new Enrollment
            {
                UserId = dto.UserId,
                CourseId = dto.CourseId,
                EnrollDate = DateTime.Now,
                Status = dto.Status
            };

            _enrollmentRepository.Add(enrollment);

            // Fetch with eager loading to populate DTO details
            var detail = GetById(enrollment.Id);
            return detail ?? new EnrollmentResponseDTO
            {
                Id = enrollment.Id,
                UserId = enrollment.UserId,
                CourseId = enrollment.CourseId,
                EnrollDate = enrollment.EnrollDate,
                Status = enrollment.Status
            };
        }

        public bool Delete(int id)
        {
            var enrollment = _enrollmentRepository.GetByIdWithDetails(id);
            if (enrollment == null)
            {
                return false;
            }

            _enrollmentRepository.Delete(enrollment);
            return true;
        }
    }
}
