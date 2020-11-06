using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using DatingApp.API.Entities;
using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;

namespace DatingApp.API.Controllers
{
    public class UsersController : BaseApiController
    {

        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }
        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetValues()
        {
            var values = await _context.Users.ToListAsync();

            return Ok(values);
        }

        // GET api/values/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetValue(int id)
        {
            var value = await _context.Users.FindAsync(id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
