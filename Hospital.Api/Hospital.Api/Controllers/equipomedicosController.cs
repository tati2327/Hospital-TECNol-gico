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
    public class equipomedicosController : ControllerBase
    {
        private readonly StorageBroker _context;

        public equipomedicosController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/equipomedicos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<equipomedico>>> Getequipomedico()
        {
            return await _context.equipomedico.ToListAsync();
        }

        // GET: api/equipomedicos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<equipomedico>> Getequipomedico(int id)
        {
            var equipomedico = await _context.equipomedico.FindAsync(id);

            if (equipomedico == null)
            {
                return NotFound();
            }

            return equipomedico;
        }

        // PUT: api/equipomedicos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putequipomedico(int id, equipomedico equipomedico)
        {
            if (id != equipomedico.idequipo)
            {
                return BadRequest();
            }

            _context.Entry(equipomedico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!equipomedicoExists(id))
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

        // POST: api/equipomedicos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<equipomedico>> Postequipomedico(equipomedico equipomedico)
        {
            _context.equipomedico.Add(equipomedico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getequipomedico", new { id = equipomedico.idequipo }, equipomedico);
        }

        // DELETE: api/equipomedicos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<equipomedico>> Deleteequipomedico(int id)
        {
            var equipomedico = await _context.equipomedico.FindAsync(id);
            if (equipomedico == null)
            {
                return NotFound();
            }

            _context.equipomedico.Remove(equipomedico);
            await _context.SaveChangesAsync();

            return equipomedico;
        }

        private bool equipomedicoExists(int id)
        {
            return _context.equipomedico.Any(e => e.idequipo == id);
        }
    }
}
