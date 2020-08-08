using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Api.Brokers;
using Hospital.Api.Models.SqlTable;

namespace Hospital.Api.Controllers.SqlController
{
    [Route("api/[controller]")]
    [ApiController]
    public class pacienteCotecsController : ControllerBase
    {
        private readonly AppDbBroker _context;

        public pacienteCotecsController(AppDbBroker context)
        {
            _context = context;
        }

        // GET: api/pacienteCotecs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<pacienteCotec>>> GetpacienteCotec()
        {
            return await _context.pacienteCotec
                                      .Where(x => x.nacionalidad == "Costarricense")
                                      .ToListAsync();
        }

        //GET: api/pacienteCo
        [RequireHttps]
        public async Task<ActionResult<IEnumerable<pacienteCotec>>> GetpacientePais()
        {
            return await _context.pacienteCotec
                                      .Where(x => x.nacionalidad == "Costarricense")
                                      .ToListAsync();
        }

        // GET: api/pacienteCotecs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<pacienteCotec>> GetpacienteCotec(string id)
        {
            var pacienteCotec = await _context.pacienteCotec.FindAsync(id);

            if (pacienteCotec == null)
            {
                return NotFound();
            }

            return pacienteCotec;
        }

        // PUT: api/pacienteCotecs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutpacienteCotec(string id, pacienteCotec pacienteCotec)
        {
            if (id != pacienteCotec.numIdentificacion)
            {
                return BadRequest();
            }

            _context.Entry(pacienteCotec).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!pacienteCotecExists(id))
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

        // POST: api/pacienteCotecs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<pacienteCotec>> PostpacienteCotec(pacienteCotec pacienteCotec)
        {
            _context.pacienteCotec.Add(pacienteCotec);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (pacienteCotecExists(pacienteCotec.numIdentificacion))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetpacienteCotec", new { id = pacienteCotec.numIdentificacion }, pacienteCotec);
        }

        // DELETE: api/pacienteCotecs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<pacienteCotec>> DeletepacienteCotec(string id)
        {
            var pacienteCotec = await _context.pacienteCotec.FindAsync(id);
            if (pacienteCotec == null)
            {
                return NotFound();
            }

            _context.pacienteCotec.Remove(pacienteCotec);
            await _context.SaveChangesAsync();

            return pacienteCotec;
        }

        private bool pacienteCotecExists(string id)
        {
            return _context.pacienteCotec.Any(e => e.numIdentificacion == id);
        }
    }
}
