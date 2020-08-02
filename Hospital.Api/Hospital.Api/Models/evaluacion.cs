using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Models
{
    public class evaluacion
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string aseo { get; set; }

        public string trato { get; set; }
        public string puntualidad { get; set; }
        public string comentarios { get; set; }

    }
}
