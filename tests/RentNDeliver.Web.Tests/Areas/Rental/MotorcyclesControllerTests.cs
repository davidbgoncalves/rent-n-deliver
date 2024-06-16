using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RentNDeliver.Web.Areas.Admin.Models.Motorcycles;


namespace RentNDeliver.Web.Tests.Areas.Rental
{
    public class MotorcyclesControllerTests : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public MotorcyclesControllerTests(CustomWebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task Index_ReturnsViewResult_WithListOfMotorcycles()
        {
            // Act
            var response = await _client.GetAsync("/Rental/Motorcycles");

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("Motorcycles", responseString);
        }

        [Fact]
        public async Task Get_Create_ReturnsViewResult()
        {
            // Act
            var response = await _client.GetAsync("/Rental/Motorcycles/Create");

            // Assert
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("Add Motorcycle", responseString);
        }

        [Fact]
        public async Task Post_Create_ReturnsRedirect_WhenModelIsValid()
        {
            // Arrange
            var newMotorcycle = new CreateMotorcycle
            {
                Year = 2022,
                Model = "Ducati",
                LicensePlate = "DEF1234"
            };

            var content = new StringContent(JsonConvert.SerializeObject(newMotorcycle), Encoding.UTF8, "application/json");

            // Act
            var response = await _client.PostAsync("/Rental/Motorcycles/Create", content);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task Post_Create_ReturnsViewResult_WhenModelIsInvalid()
        {
            // Arrange
            var newMotorcycle = new CreateMotorcycle
            {
                Year = 2022,
                Model = "", // Invalid model
                LicensePlate = "DEF1234"
            };

            var content = new StringContent(JsonConvert.SerializeObject(newMotorcycle), Encoding.UTF8, "application/json");

            // Act
            var response = await _client.PostAsync("/Rental/Motorcycles/Create", content);

            // Assert
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("The Model field is required.", responseString);
        }

        [Fact]
        public async Task Get_Edit_ReturnsViewResult_WithMotorcycle()
        {
            // Arrange
            var motorcycle1 = Domain.Motorcycles.Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            var existingMotorcycleId = motorcycle1!.Id; // Use a valid existing motorcycle ID from your seed data

            // Act
            var response = await _client.GetAsync($"/Rental/Motorcycles/Edit/{existingMotorcycleId}");

            // Assert
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("Edit Motorcycle", responseString);
        }

        [Fact]
        public async Task Post_Edit_ReturnsRedirect_WhenModelIsValid()
        {
            // Arrange
            var motorcycle1 = Domain.Motorcycles.Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            var existingMotorcycleId = motorcycle1!.Id; // Use a valid existing motorcycle ID from your seed data
            var updatedMotorcycle = new EditMotorcycle
            {
                Id = existingMotorcycleId,
                LicensePlate = "UPDATED1234"
            };

            var content = new StringContent(JsonConvert.SerializeObject(updatedMotorcycle), Encoding.UTF8, "application/json");

            // Act
            var response = await _client.PostAsync($"/Rental/Motorcycles/Edit/{existingMotorcycleId}", content);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task Post_Delete_ReturnsOk_WhenIdIsValid()
        {
            // Arrange
            var motorcycle1 = Domain.Motorcycles.Motorcycle.Create(2020, "Harley-Davidson", "XYZ1234").Value;
            var existingMotorcycleId = motorcycle1!.Id; // Use a valid existing motorcycle ID from your seed data

            // Act
            var response = await _client.PostAsync($"/Rental/Motorcycles/Delete/{existingMotorcycleId}", null);

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task Post_Delete_ReturnsBadRequest_WhenIdIsInvalid()
        {
            // Arrange
            var invalidMotorcycleId = Guid.Empty;

            // Act
            var response = await _client.PostAsync($"/Rental/Motorcycles/Delete/{invalidMotorcycleId}", null);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }
    }
}