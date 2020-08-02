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
    public class camasController : ControllerBase
    {
        private readonly StorageBroker _context;

        public camasController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/camas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<cama>>> Getcama()
        {
            return await _context.cama.ToListAsync();
        }

        // GET: api/camas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<cama>> Getcama(int id)
        {
            var cama = await _context.cama.FindAsync(id);

            if (cama == null)
            {
                return NotFound();
            }

            return cama;
        }

        // PUT: api/camas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcama(int id, cama cama)
        {
            if (id != cama.nocama)
            {
                return BadRequest();
            }

            _context.Entry(cama).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!camaExists(id))
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

        // POST: api/camas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<cama>> Postcama(cama cama)
        {
            _context.cama.Add(cama);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getcama", new { id = cama.nocama }, cama);
        }

        // DELETE: api/camas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<cama>> Deletecama(int id)
        {
            var cama = await _context.cama.FindAsync(id);
            if (cama == null)
            {
                return NotFound();
            }

            _context.cama.Remove(cama);
            await _context.SaveChangesAsync();

            return cama;
        }

        private bool camaExists(int id)
        {
            return _context.cama.Any(e => e.nocama == id);
        }
    }
}
