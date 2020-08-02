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
    public class reservacionsController : ControllerBase
    {
        private readonly StorageBroker _context;

        public reservacionsController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/reservacions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<reservacion>>> Getreservacion()
        {
            return await _context.reservacion.ToListAsync();
        }

        // GET: api/reservacions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<reservacion>> Getreservacion(string id)
        {
            var reservacion = await _context.reservacion.FindAsync(id);

            if (reservacion == null)
            {
                return NotFound();
            }

            return reservacion;
        }

        // PUT: api/reservacions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putreservacion(string id, reservacion reservacion)
        {
            if (id != reservacion.idreservacion)
            {
                return BadRequest();
            }

            _context.Entry(reservacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!reservacionExists(id))
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

        // POST: api/reservacions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<reservacion>> Postreservacion(reservacion reservacion)
        {
            _context.reservacion.Add(reservacion);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (reservacionExists(reservacion.idreservacion))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getreservacion", new { id = reservacion.idreservacion }, reservacion);
        }

        // DELETE: api/reservacions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<reservacion>> Deletereservacion(string id)
        {
            var reservacion = await _context.reservacion.FindAsync(id);
            if (reservacion == null)
            {
                return NotFound();
            }

            _context.reservacion.Remove(reservacion);
            await _context.SaveChangesAsync();

            return reservacion;
        }

        private bool reservacionExists(string id)
        {
            return _context.reservacion.Any(e => e.idreservacion == id);
        }
    }
}
