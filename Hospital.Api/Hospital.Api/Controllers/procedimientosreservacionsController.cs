using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Api.Brokers;
using Hospital.Api.Models;

namespace Hospital.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class procedimientosreservacionsController : ControllerBase
    {
        private readonly StorageBroker _context;

        public procedimientosreservacionsController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/procedimientosreservacions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<procedimientosreservacion>>> Getprocedimientosreservacion()
        {
            return await _context.procedimientosreservacion.ToListAsync();
        }

        // GET: api/procedimientosreservacions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<procedimientosreservacion>> Getprocedimientosreservacion(int id)
        {
            var procedimientosreservacion = await _context.procedimientosreservacion.FindAsync(id);

            if (procedimientosreservacion == null)
            {
                return NotFound();
            }

            return procedimientosreservacion;
        }

        // PUT: api/procedimientosreservacions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putprocedimientosreservacion(int id, procedimientosreservacion procedimientosreservacion)
        {
            if (id != procedimientosreservacion.noprocedimiento)
            {
                return BadRequest();
            }

            _context.Entry(procedimientosreservacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!procedimientosreservacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/procedimientosreservacions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<procedimientosreservacion>> Postprocedimientosreservacion(procedimientosreservacion procedimientosreservacion)
        {
            _context.procedimientosreservacion.Add(procedimientosreservacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getprocedimientosreservacion", new { id = procedimientosreservacion.noprocedimiento }, procedimientosreservacion);
        }

        // DELETE: api/procedimientosreservacions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<procedimientosreservacion>> Deleteprocedimientosreservacion(int id)
        {
            var procedimientosreservacion = await _context.procedimientosreservacion.FindAsync(id);
            if (procedimientosreservacion == null)
            {
                return NotFound();
            }

            _context.procedimientosreservacion.Remove(procedimientosreservacion);
            await _context.SaveChangesAsync();

            return procedimientosreservacion;
        }

        private bool procedimientosreservacionExists(int id)
        {
            return _context.procedimientosreservacion.Any(e => e.noprocedimiento == id);
        }
    }
}
