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

        public int aseo { get; set; }

        public int trato { get; set; }
        public int puntualidad { get; set; }
        public string comentarios { get; set; }

    }
}
