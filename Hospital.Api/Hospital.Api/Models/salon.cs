using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class salon
    {
        [Key]
        public int nosalon { get; set; }
        public string nombre { get; set; }
        public string tipo { get; set; }
        public string piso { get; set; }
        public int cantidadcamas { get; set; }
    }
}
