using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proacademy.Application.DTOs;
using Proacademy.Application.Interfaces;

namespace Proacademy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;

        public AuthController(IAuthService auService)
        {
            authService = auService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDTO dto)
        {
            //var result = authService.Login(dto);

            //if(result == null)
            //{
            //    return Unauthorized("Invalid Email or Password");

            //}
            //return Ok(result);
            try
            {
                var result = authService.Login(dto);

                if (result == null)
                    return Unauthorized();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
