using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class cama
    {
        [Key]
        public int nocama { get; set; }
        public string tipo{ get; set; }
        public int nosalon { get; set; }
        public Boolean disponibilidad { get; set; }
    }
}
