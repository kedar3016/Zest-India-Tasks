using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Application.Interfaces
{
    public interface IJWTService
    {
        string GenerateToken(user user);
    }
}
