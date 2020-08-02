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
    public class pacientesController : ControllerBase
    {
        private readonly StorageBroker _context;

        public pacientesController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/pacientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<paciente>>> Getpaciente()
        {
            return await _context.paciente.ToListAsync();
        }

        // GET: api/pacientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<paciente>> Getpaciente(string id)
        {
            var paciente = await _context.paciente.FindAsync(id);

            if (paciente == null)
            {
                return NotFound();
            }

            return paciente;
        }

        // PUT: api/pacientes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putpaciente(string id, paciente paciente)
        {
            if (id != paciente.cedula)
            {
                return BadRequest();
            }

            _context.Entry(paciente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!pacienteExists(id))
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

        // POST: api/pacientes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<paciente>> Postpaciente(paciente paciente)
        {
            _context.paciente.Add(paciente);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (pacienteExists(paciente.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getpaciente", new { id = paciente.cedula }, paciente);
        }

        // DELETE: api/pacientes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<paciente>> Deletepaciente(string id)
        {
            var paciente = await _context.paciente.FindAsync(id);
            if (paciente == null)
            {
                return NotFound();
            }

            _context.paciente.Remove(paciente);
            await _context.SaveChangesAsync();

            return paciente;
        }

        private bool pacienteExists(string id)
        {
            return _context.paciente.Any(e => e.cedula == id);
        }
    }
}
