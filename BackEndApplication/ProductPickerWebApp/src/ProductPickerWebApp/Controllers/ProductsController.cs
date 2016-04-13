using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;

namespace ProductPickerWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private ProductsDbContext _context;

      
        public ProductsController(ProductsDbContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get(string productIdFilter = "", string categoryNameFilter="", string productNameFilter="", string supplierNameFilter ="")
        {

            var products = _context.Products;

            var query = from product in products select product;

            
            if (!string.IsNullOrWhiteSpace(productIdFilter))
            {
                query = query.Where(x => x.ProductId == int.Parse(productIdFilter));
            }

            if (!string.IsNullOrWhiteSpace(categoryNameFilter))
            {
                query = query.Where(x => x.CategoryName == categoryNameFilter);
            }

            if (!string.IsNullOrWhiteSpace(productNameFilter))
            {
                query = query.Where(x => x.ProductName == productNameFilter);
            }

            if (!string.IsNullOrWhiteSpace(supplierNameFilter))
            {
                query = query.Where(x => x.CompanyName == supplierNameFilter);
            }
            
            return Ok(query.ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
