using RentNDeliver.Web;
using RentNDeliver.Web._keenthemes;
using RentNDeliver.Web._keenthemes.libs;
using Starterkit._keenthemes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

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