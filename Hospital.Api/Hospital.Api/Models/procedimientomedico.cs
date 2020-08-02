using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class procedimientomedico
    {
        [Key]
        public string nombre { get; set; }
        public int recuperacionminima { get; set; }
    }
}
