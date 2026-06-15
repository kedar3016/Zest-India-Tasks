using Proacademy.Application.DTOs;
using Proacademy.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Services
{
    public class AuthService:IAuthService
    {
        private readonly IUserRepository userRepository;
        private readonly IJWTService jwtService;
        public AuthService(IUserRepository uRepo, IJWTService jwtService)
        {
            userRepository = uRepo;
            this.jwtService = jwtService;
        }

        public AuthResponseDto? Login(LoginDTO dto)
        {

            var user = userRepository.GetByEmail(dto.Email);

            if(user == null)
            {
                return null;
            }
            if(user.Password != dto.Password)
            {
                return null;
            }
            return new AuthResponseDto
            {
                Id = user.Id,
                Name = user.Name,
                Role = user.Role,
                Token = jwtService.GenerateToken(user)
            };
        }
    }
}
