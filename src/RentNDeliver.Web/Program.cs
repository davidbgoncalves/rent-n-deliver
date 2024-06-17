using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;
using RabbitMQ.Client;
using RentNDeliver.Application.Abstractions.Messaging;
using RentNDeliver.Domain.Abstractions.Repositories;
using RentNDeliver.Domain.DeliveryPeople;
using RentNDeliver.Domain.Motorcycles;
using RentNDeliver.Domain.Rentals;
using RentNDeliver.Infrastructure.Persistence;
using RentNDeliver.Infrastructure.Persistence.Repositories;
using RentNDeliver.Infrastructure.Persistence.Repositories.DeliveryPeople;
using RentNDeliver.Infrastructure.Persistence.Repositories.DomainEventLogRepository;
using RentNDeliver.Infrastructure.Persistence.Repositories.Motorcycles;
using RentNDeliver.Infrastructure.Persistence.Repositories.Rentals;
using RentNDeliver.Infrastructure.Services.Messaging;
using RentNDeliver.Web;
using RentNDeliver.Web._keenthemes;
using RentNDeliver.Web._keenthemes.libs;
using RentNDeliver.Web.BackgroundServices;
using Starterkit._keenthemes;

var builder = WebApplication.CreateBuilder(args);

ConfigureServices(builder);
BuildTheme(builder);

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.Name = ".RentNDeliver.Session";
    options.Cookie.IsEssential = true;
});

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

app.UseSession();

app.MapControllerRoute(
    name: "MyAreas",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();


public partial class Program
{
    static void ConfigureServices(WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<RentNDeliverDbContext>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

        //Register Repositories
        builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
        builder.Services.AddScoped<IMotorcycleRepository, MotorcycleRepository>();
        builder.Services.AddScoped<IMotorcycleRentalRepository, MotorcycleRentalRepository>();
        builder.Services.AddScoped<IDeliveryPeopleRepository, DeliveryPeopleRepository>();

        //Register MediaR
        builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(typeof(Program).Assembly,
            typeof(RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList.GetMotorcycleListQuery).Assembly));

        // Set up of RabbitMQ
        var rabbitMqOptions = new RabbitMqOptions();
        builder.Configuration.GetSection("RabbitMQ").Bind(rabbitMqOptions);
        builder.Services.AddSingleton(rabbitMqOptions);
        builder.Services.AddSingleton<IConnectionFactory>(sp => new ConnectionFactory
        {
            HostName = rabbitMqOptions.HostName,
            UserName = rabbitMqOptions.UserName,
            Password = rabbitMqOptions.Password
        });


        // Register RabbitMQ Publisher
        builder.Services.AddSingleton<IMessagePublisher, RabbitMqPublisher>();
        builder.Services.AddHostedService<RabbitMqConsumer>();

        //Set up MongoDB
        var mongoConnectionString = builder.Configuration.GetConnectionString("MongoDbConnection");
        var mongoDatabaseName = builder.Configuration
            .GetSection("MongoDbSettings")
            .GetSection("DatabaseName")
            .Value;
        if (mongoConnectionString != null && mongoDatabaseName != null)
            builder.Services.AddSingleton(new MongoDbContext(mongoConnectionString, mongoDatabaseName));
        else
            Console.WriteLine("MongoDbConnection is not available.");
        
        // Add services to the container.
        builder.Services.AddControllersWithViews();
    }

    static void BuildTheme(WebApplicationBuilder builder)
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
}