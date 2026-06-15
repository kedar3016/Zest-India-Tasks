using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Proacademy.Application.DTOs;
using Proacademy.Domain.Entities;

namespace Proacademy.Application.Interfaces
{
    public interface ICourseService
    {
        List<CourseResponseDTO> GetAll();
        Course getById(int id);
        CourseResponseDTO Add(CreateCourseDTO dto);
        CourseResponseDTO Update(int id, CreateCourseDTO dto);
        bool Delete(int id);
    }
}
