using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class historialclinico
    {
        [Key]
        public int idhistorial { get; set; }
        public string cedulapaciente { get; set; }
    }
}
