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
    public class procedimientomedicosController : ControllerBase
    {
        private readonly StorageBroker _context;

        public procedimientomedicosController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/procedimientomedicos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<procedimientomedico>>> Getprocedimientomedico()
        {
            return await _context.procedimientomedico.ToListAsync();
        }

        // GET: api/procedimientomedicos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<procedimientomedico>> Getprocedimientomedico(string id)
        {
            var procedimientomedico = await _context.procedimientomedico.FindAsync(id);

            if (procedimientomedico == null)
            {
                return NotFound();
            }

            return procedimientomedico;
        }

        // PUT: api/procedimientomedicos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putprocedimientomedico(string id, procedimientomedico procedimientomedico)
        {
            if (id != procedimientomedico.nombre)
            {
                return BadRequest();
            }

            _context.Entry(procedimientomedico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!procedimientomedicoExists(id))
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

        // POST: api/procedimientomedicos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<procedimientomedico>> Postprocedimientomedico(procedimientomedico procedimientomedico)
        {
            _context.procedimientomedico.Add(procedimientomedico);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (procedimientomedicoExists(procedimientomedico.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getprocedimientomedico", new { id = procedimientomedico.nombre }, procedimientomedico);
        }

        // DELETE: api/procedimientomedicos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<procedimientomedico>> Deleteprocedimientomedico(string id)
        {
            var procedimientomedico = await _context.procedimientomedico.FindAsync(id);
            if (procedimientomedico == null)
            {
                return NotFound();
            }

            _context.procedimientomedico.Remove(procedimientomedico);
            await _context.SaveChangesAsync();

            return procedimientomedico;
        }

        private bool procedimientomedicoExists(string id)
        {
            return _context.procedimientomedico.Any(e => e.nombre == id);
        }
    }
}
