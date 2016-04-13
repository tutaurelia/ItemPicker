using Microsoft.Data.Entity;
using Microsoft.Framework.ConfigurationModel;

namespace ProductPickerWebApp
{
    public class ProductsDbContext : DbContext
    {
         public DbSet<Products>  Products { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"Data Source=HPPAVILION;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        //}
    }
}