using Hospital.Api.Models.SqlTable;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Brokers
{
    public class AppDbBroker:DbContext
    {
        public AppDbBroker(DbContextOptions<AppDbBroker>options)
            :base(options)
        {

        }
        public DbSet<pacienteCotec> pacienteCotec { get; set; }
    }
}
