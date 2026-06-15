using Proacademy.Domain.Entities;
using System.Collections.Generic;

namespace Proacademy.Application.Interfaces
{
    public interface IEnrollmentRepository
    {
        List<Enrollment> GetAllWithDetails();
        List<Enrollment> GetByUserIdWithDetails(int userId);
        Enrollment? GetByIdWithDetails(int id);
        void Add(Enrollment enrollment);
        void Update(Enrollment enrollment);
        void Delete(Enrollment enrollment);
    }
}
