using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class equipomedico
    {
        [Key]
        public int idequipo { get; set; }
        public string nombre { get; set; }
        public string proveedor { get; set; }
        public int cantidad { get; set; }
    }
}
