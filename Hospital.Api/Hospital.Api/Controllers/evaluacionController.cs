using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hospital.Api.Repositories;
using Hospital.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class evaluacionController : Controller
    {
        private IEvaluacionCollection db = new Evaluacion();


        // GET: api/evaluacion
        [HttpGet]
        public async Task<IActionResult> GetAllEvaluaciones()
        {
            return Ok(await db.GetAllEvaluaciones());
        }

        // GET: api/evaluacion/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvaluacion(string id)
        {
            return Ok(await db.GetEvaluacionById(id));
        }


        // POST: api/evaluacion
        [HttpPost]

        public async Task<IActionResult> CreateEvaluacion([FromBody] evaluacion evaluacion)
        {
            if (evaluacion == null)
                return BadRequest();

            await db.InsertEvaluacion(evaluacion);

            return Created("Created", true);

        }

        // PUT: api/evaluacion/5
        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateEvaluacion([FromBody] evaluacion evaluacion, string id)
        {
            if (evaluacion == null)
                return BadRequest();

            evaluacion.Id = new MongoDB.Bson.ObjectId(id);
            await db.UdpateEvaluacion(evaluacion);

            return Created("Updated", true);

        }

        // DELETE: api/evaluacion/5
        [HttpDelete("{id}")]

        public async Task<IActionResult> DelecteEvaluacion(string id)
        {
            await db.DeleteEvaluacion(id);
            return NoContent();
        }


    }
}
