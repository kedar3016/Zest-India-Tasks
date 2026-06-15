using Microsoft.EntityFrameworkCore;
using Proacademy.Application.Interfaces;
using Proacademy.Domain.Entities;
using Proacademy.Infrastructure.Data;
using System.Collections.Generic;
using System.Linq;

namespace Proacademy.Infrastructure.Repositories
{
    public class EnrollmentRepository : IEnrollmentRepository
    {
        private readonly AppDbContext dbContext;

        public EnrollmentRepository(AppDbContext context)
        {
            dbContext = context;
        }

        public List<Enrollment> GetAllWithDetails()
        {
            return dbContext.Enrollments
                .Include(e => e.User)
                .Include(e => e.Course)
                .ToList();
        }

        public List<Enrollment> GetByUserIdWithDetails(int userId)
        {
            return dbContext.Enrollments
                .Include(e => e.User)
                .Include(e => e.Course)
                .Where(e => e.UserId == userId)
                .ToList();
        }

        public Enrollment? GetByIdWithDetails(int id)
        {
            return dbContext.Enrollments
                .Include(e => e.User)
                .Include(e => e.Course)
                .FirstOrDefault(e => e.Id == id);
        }

        public void Add(Enrollment enrollment)
        {
            dbContext.Enrollments.Add(enrollment);
            dbContext.SaveChanges();
        }

        public void Update(Enrollment enrollment)
        {
            dbContext.Enrollments.Update(enrollment);
            dbContext.SaveChanges();
        }

        public void Delete(Enrollment enrollment)
        {
            dbContext.Enrollments.Remove(enrollment);
            dbContext.SaveChanges();
        }
    }
}
