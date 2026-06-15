using Proacademy.Application.DTOs;
using Proacademy.Application.Interfaces;
using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Services
{
    public class CourseService:ICourseService
    {
        private readonly ICourseRepository courseRepository;

        public CourseService(ICourseRepository _courseRepository)
        {
            courseRepository = _courseRepository;
        }

        public List<CourseResponseDTO> GetAll()
        {
            return courseRepository.GetAll().Select(c => new CourseResponseDTO
            {
                Id = c.id,
                Name = c.name,
                Duration = c.duration,
                Fees = c.fees,
                SeatsAvailable = c.seatAvailable,
                ImageURL = c.imageUrl

            }).ToList();

        }
        public Course getById(int id)
        {
            return courseRepository.findById(id);
        }

        public CourseResponseDTO Add(CreateCourseDTO dto)
        {
            var course = new Course
            {
                name = dto.Name,
                duration = dto.Duration,
                fees = dto.Fees,
                seatAvailable = dto.SeatsAvailable,
                imageUrl = dto.ImageURL
            };
            courseRepository.Add(course);

            return new CourseResponseDTO
            {
                Id = course.id,
                Name = course.name,
                Duration = course.duration,
                Fees = course.fees,
                SeatsAvailable = course.seatAvailable,
                ImageURL = course.imageUrl
            };
        }

        public CourseResponseDTO Update(int id, CreateCourseDTO dto)
        {
            var course = courseRepository.findById(id);
            if (course == null)
            {
                return null;
            }

            course.name = dto.Name;
            course.duration = dto.Duration;
            course.fees = dto.Fees;
            course.seatAvailable = dto.SeatsAvailable;
            course.imageUrl = dto.ImageURL;

            courseRepository.Update(course);

            return new CourseResponseDTO
            {
                Id = course.id,
                Name = course.name,
                Duration = course.duration,
                Fees = course.fees,
                SeatsAvailable = course.seatAvailable,
                ImageURL = course.imageUrl
            };
        }

        public bool Delete(int id)
        {
            var course = courseRepository.findById(id);
            if (course == null)
            {
                return false;
            }
            courseRepository.Delete(course);
            return true;
        }
    }
}
