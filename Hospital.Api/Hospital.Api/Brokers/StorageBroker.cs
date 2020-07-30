using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Hospital.Api.Models;

namespace Hospital.Api.Brokers
{
    public class StorageBroker: DbContext
    {
        public StorageBroker(DbContextOptions<StorageBroker> options)
            :base(options)
        {
            this.Database.Migrate();
        }
        public DbSet<Patient> Patients { get; set; }
    }
}
