using System.Text.Json;
using RentNDeliver.Application.Motorcycles;

namespace RentNDeliver.Application.Tests.Motorcycles;

public class MotorcycleListItemDtoTests
{
    [Fact]
    public void SerializationTest()
    {
        var dto = new MotorcycleListItemDto(
            Guid.NewGuid(),
            "ABC1234",
            "Honda CB500F",
            2021,
            DateTime.UtcNow,
            null);

        var json = JsonSerializer.Serialize(dto);
        var deserializedDto = JsonSerializer.Deserialize<MotorcycleListItemDto>(json);

        Assert.Equal(dto, deserializedDto);
    }
}