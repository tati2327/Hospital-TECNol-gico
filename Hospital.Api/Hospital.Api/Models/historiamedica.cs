using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class historiamedica
    {
        [Key]
        public int idhistoriamedica { get; set; }
        public int idhistorial { get; set; }
        public string fechahistoria { get; set; }
        public string nombreprocedimiento { get; set; }
        public string tratamiento { get; set; }
        public string cedulapersonal { get; set; }
    }
}
