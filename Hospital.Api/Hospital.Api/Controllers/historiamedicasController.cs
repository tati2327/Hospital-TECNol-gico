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
    public class historiamedicasController : ControllerBase
    {
        private readonly StorageBroker _context;

        public historiamedicasController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/historiamedicas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<historiamedica>>> Gethistoriamedica()
        {
            return await _context.historiamedica.ToListAsync();
        }

        // GET: api/historiamedicas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<historiamedica>> Gethistoriamedica(int id)
        {
            var historiamedica = await _context.historiamedica.FindAsync(id);

            if (historiamedica == null)
            {
                return NotFound();
            }

            return historiamedica;
        }

        // PUT: api/historiamedicas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthistoriamedica(int id, historiamedica historiamedica)
        {
            if (id != historiamedica.idhistoriamedica)
            {
                return BadRequest();
            }

            _context.Entry(historiamedica).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!historiamedicaExists(id))
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

        // POST: api/historiamedicas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<historiamedica>> Posthistoriamedica(historiamedica historiamedica)
        {
            _context.historiamedica.Add(historiamedica);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gethistoriamedica", new { id = historiamedica.idhistoriamedica }, historiamedica);
        }

        // DELETE: api/historiamedicas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<historiamedica>> Deletehistoriamedica(int id)
        {
            var historiamedica = await _context.historiamedica.FindAsync(id);
            if (historiamedica == null)
            {
                return NotFound();
            }

            _context.historiamedica.Remove(historiamedica);
            await _context.SaveChangesAsync();

            return historiamedica;
        }

        private bool historiamedicaExists(int id)
        {
            return _context.historiamedica.Any(e => e.idhistoriamedica == id);
        }
    }
}
