using System;

namespace Hospital.Api.Models
{
    public class Patient
    {
        public int  Id { get; set; }
        public string Service { get; set; }
        public int Reservation { get; set; }
    }
}
