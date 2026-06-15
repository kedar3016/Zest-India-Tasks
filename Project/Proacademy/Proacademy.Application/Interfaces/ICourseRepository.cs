using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Interfaces
{
    public interface ICourseRepository
    {
        List<Course> GetAll();
        Course findById(int id);
        void Add(Course course);
        void Update(Course course);
        void Delete(Course course);
    }
}
