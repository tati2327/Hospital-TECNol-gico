using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models.SqlTable
{
    public class pacienteCotec
    {
        [Key]
        public string numIdentificacion { get; set; }
        public string nombrePaciente { get; set; }
        public string apellidos { get; set; }
        public string nacimiento { get; set; }
        public string region { get; set; }
        public string nacionalidad { get; set; }
        public string estado { get; set; }
        public string email { get; set; }
        public char internado { get; set; }
        public string patologias { get; set; }
        public string medicamentos { get; set; }
        public string uci { get; set; }
    }
}
