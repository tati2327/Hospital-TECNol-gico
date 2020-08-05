using Hospital.Api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Repositories
{
    public class Evaluacion : IEvaluacionCollection
    {
        internal MongoDBRepository repositorio = new MongoDBRepository();
        private IMongoCollection<evaluacion> Collection;

        public Evaluacion()
        {
            Collection = repositorio.db.GetCollection<evaluacion>("evaluacionTabla");
        }
        public async Task DeleteEvaluacion(string id)
        {
            var filtro = Builders<evaluacion>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filtro);
                    
        }

        public async Task<List<evaluacion>> GetAllEvaluaciones()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<evaluacion> GetEvaluacionById(string id)
        {
            return await Collection.FindAsync(
                new BsonDocument { { "_id", new ObjectId(id)} }).Result.FirstAsync();
        }

        public async Task InsertEvaluacion(evaluacion evaluacion)
        {
            await Collection.InsertOneAsync(evaluacion);
        }

        public async Task UdpateEvaluacion(evaluacion evaluacion)
        {
            var filter = Builders<evaluacion>.Filter.Eq(s => s.Id, evaluacion.Id);
            await Collection.ReplaceOneAsync(filter, evaluacion);
        }
    }
}
