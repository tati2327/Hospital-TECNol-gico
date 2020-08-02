using Hospital.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital.Api.Brokers
{
    public class StorageBroker : DbContext
    {
        public StorageBroker(DbContextOptions<StorageBroker> options)
            : base(options)
        {
            this.Database.Migrate();
        }
        public DbSet<Hospital.Api.Models.paciente> paciente { get; set; }
        public DbSet<Hospital.Api.Models.personal> personal { get; set; }
        public DbSet<Hospital.Api.Models.procedimientomedico> procedimientomedico { get; set; }
        public DbSet<Hospital.Api.Models.reservacion> reservacion { get; set; }
        public DbSet<Hospital.Api.Models.equipomedico> equipomedico { get; set; }
        public DbSet<Hospital.Api.Models.cama> cama { get; set; }
        public DbSet<Hospital.Api.Models.salon> salon { get; set; }
        public DbSet<Hospital.Api.Models.equipoporcama> equipoporcama { get; set; }
        public DbSet<Hospital.Api.Models.historialclinico> historialclinico { get; set; }
        public DbSet<Hospital.Api.Models.historiamedica> historiamedica { get; set; }
        public DbSet<Hospital.Api.Models.procedimientosreservacion> procedimientosreservacion { get; set; }

        
    }
}
