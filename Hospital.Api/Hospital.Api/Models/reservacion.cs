using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class reservacion
    {
        [Key]
        public string idreservacion { get; set; }
        public string cedulapaciente { get; set; }
        public string ingreso { get; set; }
        public string salida { get; set; }
        public int nocama { get; set; }
    }
}
