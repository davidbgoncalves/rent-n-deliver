using RentNDeliver.Application.Motorcycles.Queries.GetMotorcycleList;

namespace RentNDeliver.Application.Tests.Motorcycles.Queries;

public class GetMotorcycleListQueryTests
{
    [Fact]
    public void GetMotorcycleListQuery_DefaultConstructor_SetsProperties()
    {
        // Arrange & Act
        var query = new GetMotorcycleListQuery();

        // Assert
        Assert.Null(query.LicensePlace);
    }

    [Fact]
    public void GetMotorcycleListQuery_ParameterizedConstructor_SetsProperties()
    {
        // Arrange
        var licensePlace = "ABC1234";

        // Act
        var query = new GetMotorcycleListQuery(licensePlace);

        // Assert
        Assert.Equal(licensePlace, query.LicensePlace);
    }

    [Fact]
    public void GetMotorcycleListQuery_EqualityTest()
    {
        // Arrange
        var licensePlace1 = "ABC1234";
        var licensePlace2 = "DEF5678";
        
        var query1 = new GetMotorcycleListQuery(licensePlace1);
        var query2 = new GetMotorcycleListQuery(licensePlace1);
        var query3 = new GetMotorcycleListQuery(licensePlace2);

        // Act & Assert
        Assert.Equal(query1, query2); // They should be equal
        Assert.NotEqual(query1, query3); // They should not be equal
    }

    [Fact]
    public void GetMotorcycleListQuery_HashCodeTest()
    {
        // Arrange
        var licensePlace = "ABC1234";
        
        var query1 = new GetMotorcycleListQuery(licensePlace);
        var query2 = new GetMotorcycleListQuery(licensePlace);

        // Act & Assert
        Assert.Equal(query1.GetHashCode(), query2.GetHashCode()); // Hash codes should be equal
    }
}