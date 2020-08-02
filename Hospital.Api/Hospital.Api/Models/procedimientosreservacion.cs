using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class procedimientosreservacion
    {
        [Key]
        public int noprocedimiento { get; set; }
        public string idreservacion { get; set; }
        public string nombreprocedimiento { get; set; }
    }
}
