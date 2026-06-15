using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Proacademy.Application.Interfaces;
using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Services
{
    public class JWTService:IJWTService
    {
        private readonly IConfiguration configuration;
        public JWTService(IConfiguration _configuration)
        {
            configuration = _configuration;
        }
        public string GenerateToken(user user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name,user.Name),
                new Claim(ClaimTypes.Email,user.Email),
                new Claim(ClaimTypes.Role,user.Role)
            };
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    configuration["Jwt:Key"]!));
            var credentials = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: configuration["Jwt:Issuer"],
                audience: configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: credentials);

            Console.WriteLine(configuration["Jwt:Key"]);
            Console.WriteLine(configuration["Jwt:Key"]?.Length);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
