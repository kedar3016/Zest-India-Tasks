using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proacademy.Application.DTOs;
using Proacademy.Application.Interfaces;
using System.Collections.Generic;

namespace Proacademy.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class EnrollmentController : ControllerBase
    {
        private readonly IEnrollmentService _enrollmentService;

        public EnrollmentController(IEnrollmentService enrollmentService)
        {
            _enrollmentService = enrollmentService;
        }

        [Authorize(Roles = "admin")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var enrollments = _enrollmentService.GetAll();
            return Ok(enrollments);
        }

        [HttpGet("my")]
        public IActionResult GetMyEnrollments()
        {
            var userIdStr = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdStr) || !int.TryParse(userIdStr, out int userId))
            {
                return Unauthorized("User ID not found in token");
            }
            var enrollments = _enrollmentService.GetByUserId(userId);
            return Ok(enrollments);
        }

        [Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var enrollment = _enrollmentService.GetById(id);
            if (enrollment == null)
            {
                return NotFound();
            }
            return Ok(enrollment);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateEnrollmentDTO dto)
        {
            if (dto == null)
            {
                return BadRequest("Invalid enrollment data");
            }

            var created = _enrollmentService.Create(dto);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var success = _enrollmentService.Delete(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
