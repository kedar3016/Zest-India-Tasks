using Proacademy.Application.DTOs;
using System.Collections.Generic;

namespace Proacademy.Application.Interfaces
{
    public interface IEnrollmentService
    {
        List<EnrollmentResponseDTO> GetAll();
        List<EnrollmentResponseDTO> GetByUserId(int userId);
        EnrollmentResponseDTO? GetById(int id);
        EnrollmentResponseDTO Create(CreateEnrollmentDTO dto);
        bool Delete(int id);
    }
}
