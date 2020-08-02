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
    public class personalsController : ControllerBase
    {
        private readonly StorageBroker _context;

        public personalsController(StorageBroker context)
        {
            _context = context;
        }

        // GET: api/personals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<personal>>> Getpersonal()
        {
            return await _context.personal.ToListAsync();
        }

        // GET: api/personals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<personal>> Getpersonal(string id)
        {
            var personal = await _context.personal.FindAsync(id);

            if (personal == null)
            {
                return NotFound();
            }

            return personal;
        }

        // PUT: api/personals/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putpersonal(string id, personal personal)
        {
            if (id != personal.cedula)
            {
                return BadRequest();
            }

            _context.Entry(personal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!personalExists(id))
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

        // POST: api/personals
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<personal>> Postpersonal(personal personal)
        {
            _context.personal.Add(personal);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (personalExists(personal.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getpersonal", new { id = personal.cedula }, personal);
        }

        // DELETE: api/personals/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<personal>> Deletepersonal(string id)
        {
            var personal = await _context.personal.FindAsync(id);
            if (personal == null)
            {
                return NotFound();
            }

            _context.personal.Remove(personal);
            await _context.SaveChangesAsync();

            return personal;
        }

        private bool personalExists(string id)
        {
            return _context.personal.Any(e => e.cedula == id);
        }
    }
}
