using Hospital.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Api.Repositories
{
    public interface IEvaluacionCollection
    {
        Task InsertEvaluacion(evaluacion evaluacion);
        Task UdpateEvaluacion(evaluacion evaluacion);

        Task DeleteEvaluacion(string id);

        Task<List<evaluacion>> GetAllEvaluaciones();

        Task<evaluacion> GetEvaluacionById(string id);




    }
}
