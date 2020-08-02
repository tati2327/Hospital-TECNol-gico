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
    public class equipoporcamasController : ControllerBase
    {
        private readonly StorageBroker _context;

        public equipoporcamasController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/equipoporcamas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<equipoporcama>>> Getequipoporcama()
        {
            return await _context.equipoporcama.ToListAsync();
        }

        // GET: api/equipoporcamas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<equipoporcama>> Getequipoporcama(int id)
        {
            var equipoporcama = await _context.equipoporcama.FindAsync(id);

            if (equipoporcama == null)
            {
                return NotFound();
            }

            return equipoporcama;
        }

        // PUT: api/equipoporcamas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putequipoporcama(int id, equipoporcama equipoporcama)
        {
            if (id != equipoporcama.idequipocama)
            {
                return BadRequest();
            }

            _context.Entry(equipoporcama).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!equipoporcamaExists(id))
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

        // POST: api/equipoporcamas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<equipoporcama>> Postequipoporcama(equipoporcama equipoporcama)
        {
            _context.equipoporcama.Add(equipoporcama);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getequipoporcama", new { id = equipoporcama.idequipocama }, equipoporcama);
        }

        // DELETE: api/equipoporcamas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<equipoporcama>> Deleteequipoporcama(int id)
        {
            var equipoporcama = await _context.equipoporcama.FindAsync(id);
            if (equipoporcama == null)
            {
                return NotFound();
            }

            _context.equipoporcama.Remove(equipoporcama);
            await _context.SaveChangesAsync();

            return equipoporcama;
        }

        private bool equipoporcamaExists(int id)
        {
            return _context.equipoporcama.Any(e => e.idequipocama == id);
        }
    }
}
