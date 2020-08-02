using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class equipoporcama
    {
        [Key]
        public int idequipocama { get; set; }
        public int nocama { get; set; }
        public int idequipomedico { get; set; }
    }
}
