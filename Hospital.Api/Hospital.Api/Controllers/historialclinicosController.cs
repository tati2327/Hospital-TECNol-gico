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
    public class historialclinicosController : ControllerBase
    {
        private readonly StorageBroker _context;

        public historialclinicosController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/historialclinicos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<historialclinico>>> Gethistorialclinico()
        {
            return await _context.historialclinico.ToListAsync();
        }

        // GET: api/historialclinicos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<historialclinico>> Gethistorialclinico(int id)
        {
            var historialclinico = await _context.historialclinico.FindAsync(id);

            if (historialclinico == null)
            {
                return NotFound();
            }

            return historialclinico;
        }

        // PUT: api/historialclinicos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthistorialclinico(int id, historialclinico historialclinico)
        {
            if (id != historialclinico.idhistorial)
            {
                return BadRequest();
            }

            _context.Entry(historialclinico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!historialclinicoExists(id))
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

        // POST: api/historialclinicos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<historialclinico>> Posthistorialclinico(historialclinico historialclinico)
        {
            _context.historialclinico.Add(historialclinico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gethistorialclinico", new { id = historialclinico.idhistorial }, historialclinico);
        }

        // DELETE: api/historialclinicos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<historialclinico>> Deletehistorialclinico(int id)
        {
            var historialclinico = await _context.historialclinico.FindAsync(id);
            if (historialclinico == null)
            {
                return NotFound();
            }

            _context.historialclinico.Remove(historialclinico);
            await _context.SaveChangesAsync();

            return historialclinico;
        }

        private bool historialclinicoExists(int id)
        {
            return _context.historialclinico.Any(e => e.idhistorial == id);
        }
    }
}
