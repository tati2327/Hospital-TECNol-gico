using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class personal
    {
        [Key]
        public string cedula { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public string telefono { get; set; }
        public string nacimiento { get; set; }
        public string direccion { get; set; }
        public string ingreso { get; set; }
        public string puesto { get; set; }
        public string contraseña { get; set; }
    }
}
