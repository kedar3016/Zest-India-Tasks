using Proacademy.Infrastructure.Data;
using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Proacademy.Application.Interfaces;

namespace Proacademy.Infrastructure.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly AppDbContext dbContext;

        public CourseRepository(AppDbContext context)
        {
            dbContext = context;
        }

        public List<Course> GetAll()
        {
            return dbContext.Courses.ToList();
        }
        public Course findById(int id)
        {
            return dbContext.Courses.FirstOrDefault(c => c.id == id);
        }
        public void Add(Course course)
        {
            dbContext.Courses.Add(course);
            dbContext.SaveChanges();
        }
        public void Update(Course course)
        {
            dbContext.Courses.Update(course);
            dbContext.SaveChanges();
        }
        public void Delete(Course course)
        {
            dbContext.Courses.Remove(course);
            dbContext.SaveChanges();
        }
    }
}
