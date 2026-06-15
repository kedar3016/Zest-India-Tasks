using Proacademy.Application.Interfaces;
using Proacademy.Infrastructure.Data;
using Proacademy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proacademy.Infrastructure.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly AppDbContext dbContext;

        public UserRepository(AppDbContext context)
        {
            dbContext = context;
        }
        public user? GetByEmail(string email)
        {
            return dbContext.Users.FirstOrDefault(x => x.Email == email);

        }
    }
}
