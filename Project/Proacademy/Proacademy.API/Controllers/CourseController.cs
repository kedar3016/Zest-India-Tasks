using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proacademy.Application.Interfaces;
using Proacademy.Application.DTOs;
using Proacademy.Domain.Entities;

namespace Proacademy.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    
    public class CourseController : ControllerBase
    {
        private readonly ICourseService cService;
        public CourseController(ICourseService courseService)
        {
            cService = courseService;
        }
        [HttpGet]
        public IActionResult GetAllCourse()
        {
            var courses = cService.GetAll();
            return Ok(courses);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id) {

            Course c = cService.getById(id);
            if(c == null)
            {
                return NotFound();
            }
            return Ok(c);
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult AddCourse([FromBody] CreateCourseDTO dto)
        {
            if (dto == null)
            {
                return BadRequest("Course data is null");
            }
            var created = cService.Add(dto);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        [Authorize(Roles = "admin")]
        [HttpPut("{id}")]
        public IActionResult UpdateCourse(int id, [FromBody] CreateCourseDTO dto)
        {
            if (dto == null)
            {
                return BadRequest("Course data is null");
            }
            var updated = cService.Update(id, dto);
            if (updated == null)
            {
                return NotFound();
            }
            return Ok(updated);
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var success = cService.Delete(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
