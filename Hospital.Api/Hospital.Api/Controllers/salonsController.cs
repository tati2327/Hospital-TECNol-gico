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
    public class salonsController : ControllerBase
    {
        private readonly StorageBroker _context;

        public salonsController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/salons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<salon>>> Getsalon()
        {
            return await _context.salon.ToListAsync();
        }

        // GET: api/salons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<salon>> Getsalon(int id)
        {
            var salon = await _context.salon.FindAsync(id);

            if (salon == null)
            {
                return NotFound();
            }

            return salon;
        }

        // PUT: api/salons/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putsalon(int id, salon salon)
        {
            if (id != salon.nosalon)
            {
                return BadRequest();
            }

            _context.Entry(salon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!salonExists(id))
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

        // POST: api/salons
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<salon>> Postsalon(salon salon)
        {
            _context.salon.Add(salon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getsalon", new { id = salon.nosalon }, salon);
        }

        // DELETE: api/salons/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<salon>> Deletesalon(int id)
        {
            var salon = await _context.salon.FindAsync(id);
            if (salon == null)
            {
                return NotFound();
            }

            _context.salon.Remove(salon);
            await _context.SaveChangesAsync();

            return salon;
        }

        private bool salonExists(int id)
        {
            return _context.salon.Any(e => e.nosalon == id);
        }
    }
}
