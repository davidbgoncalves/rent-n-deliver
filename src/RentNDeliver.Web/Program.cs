using Microsoft.EntityFrameworkCore;
using RentNDeliver.Domain.Motorcycles;
using RentNDeliver.Infrastructure.Persistence;
using RentNDeliver.Infrastructure.Persistence.Repositories;
using RentNDeliver.Web;
using RentNDeliver.Web._keenthemes;
using RentNDeliver.Web._keenthemes.libs;
using Starterkit._keenthemes;

var builder = WebApplication.CreateBuilder(args);

ConfigureServices(builder);
BuildTheme(builder);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.UseThemeMiddleware();

app.MapControllerRoute(
    name : "MyAreas",
    pattern : "{area:exists}/{controller=Home}/{action=Index}/{id?}"
);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
return;

void ConfigureServices(WebApplicationBuilder builder)
{
    builder.Services.AddDbContext<RentNDeliverDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
    
    //Register MediaR
    builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(typeof(Program).Assembly, typeof(RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList.GetMotorcycleListQuery).Assembly));
    
    //Register Repositories
    builder.Services.AddScoped<IMotorcycleRepository, MotorcycleRepository>();
    
    // Add services to the container.
    builder.Services.AddControllersWithViews();
}

void BuildTheme(WebApplicationBuilder builder)
{
    builder.Services.AddScoped<IKTTheme, KTTheme>();
    builder.Services.AddSingleton<IKTBootstrapBase, KTBootstrapBase>();

    IConfiguration themeConfiguration = new ConfigurationBuilder()
        .AddJsonFile("_keenthemes/config/themesettings.json")
        .Build();

    IConfiguration iconsConfiguration = new ConfigurationBuilder()
        .AddJsonFile("_keenthemes/config/icons.json")
        .Build();

    KTThemeSettings.init(themeConfiguration);
    KTIconsSettings.init(iconsConfiguration);
}