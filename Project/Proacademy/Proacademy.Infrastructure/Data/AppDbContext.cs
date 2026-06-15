using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Proacademy.Domain.Entities;

namespace Proacademy.Infrastructure.Data
{
    public class AppDbContext : DbContext  {
    
        public AppDbContext(
            DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<user> Users { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
    }

}
