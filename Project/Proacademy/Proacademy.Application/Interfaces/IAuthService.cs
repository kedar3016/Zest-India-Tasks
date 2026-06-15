using Proacademy.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Interfaces
{
    public interface IAuthService
    {
        AuthResponseDto? Login(LoginDTO dto);
    }
}
