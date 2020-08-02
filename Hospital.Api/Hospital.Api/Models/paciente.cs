using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using NodaTime;

namespace Hospital.Api.Models
{
    public class paciente
    {
        [Key]
        public string cedula { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public string telefono { get; set; }
        public string nacimiento { get; set; }
        public string direccion { get; set; }
        public string patologias { get; set; }
        public string tratamiento { get; set; }
        public string doctorencargado { get; set; }
        public string estado { get; set; }
        public string contraseña { get; set; }


    }
}
