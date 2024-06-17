using RentNDeliver.Domain.Rentals;

namespace RentNDeliver.Domain.Tests.Rentals
{
    public class MotorcycleRentalTests
    {
        [Fact]
        public void Create_ValidMotorcycleRental_ShouldReturnSuccess()
        {
            // Arrange
            var motorcycleId = Guid.NewGuid();
            var deliveryPersonId = Guid.NewGuid();
            var selectedRentalPlan = RentalPlan.AvailablePlans()[0];
            var expectedEndDate = DateTime.UtcNow.AddDays(15);

            // Act
            var result = MotorcycleRental.Create(
                motorcycleId,
                deliveryPersonId,
                selectedRentalPlan,
                expectedEndDate);

            // Assert
            Assert.True(result.IsSuccess);
        }

        [Theory]
        [InlineData(7, 30, 20)]
        [InlineData(15, 28, 40)]
        public void Finish_EarlyReturn_ShouldApplyEarlyDeliveryFee(int days, decimal dayCost, decimal earlyDeliveryFee)
        {
            // Arrange
            var rentalPlan = new RentalPlan(Guid.NewGuid(), "Test Plan", days, dayCost, earlyDeliveryFee, 50);
            var motorcycleRental = CreateMotorcycleRental(rentalPlan);
            var earlyReturnDate = motorcycleRental.ExpectedEndDate.AddDays(-1);

            // Act
            motorcycleRental.Finish(earlyReturnDate);

            // Assert
            var totalDays = (earlyReturnDate - motorcycleRental.StartDate).Days;
            var expectedCost = totalDays * dayCost;
            var remainingDays = days - totalDays;
            var earlyDeliveryAmount = (remainingDays * dayCost) * (earlyDeliveryFee / 100);
            var finalCost = expectedCost + earlyDeliveryAmount;

            Assert.Equal(finalCost, motorcycleRental.TotalCost);
        }

        [Fact]
        public void Finish_LateReturn_ShouldApplyAdditionalDayFee()
        {
            // Arrange
            var rentalPlan = new RentalPlan(Guid.NewGuid(), "Test Plan", 7, 30, 0, 50);
            var motorcycleRental = CreateMotorcycleRental(rentalPlan);
            var lateReturnDate = motorcycleRental.ExpectedEndDate.AddDays(3);

            // Act
            motorcycleRental.Finish(lateReturnDate);

            // Assert
            var totalDays = (lateReturnDate - motorcycleRental.StartDate).Days;
            var expectedCost = rentalPlan.MinimumNumberOfDays * rentalPlan.DayCost; // Cost for initial rental days
            var additionalDays = (lateReturnDate - motorcycleRental.ExpectedEndDate).Days;
            var additionalCost = additionalDays * rentalPlan.AdditionalDayFee; // Cost for additional days

            Assert.Equal(expectedCost + additionalCost, motorcycleRental.TotalCost);
        }

        [Fact]
        public void Finish_OnExpectedEndDate_ShouldApplyNoAdditionalFees()
        {
            // Arrange
            var rentalPlan = new RentalPlan(Guid.NewGuid(), "Test Plan", 7, 30, 0, 50);
            var motorcycleRental = CreateMotorcycleRental(rentalPlan);
            var returnDate = motorcycleRental.ExpectedEndDate;

            // Act
            motorcycleRental.Finish(returnDate);

            // Assert
            var totalDays = (returnDate - motorcycleRental.StartDate).Days;
            var expectedCost = totalDays * rentalPlan.DayCost;

            Assert.Equal(expectedCost, motorcycleRental.TotalCost);
        }

        private MotorcycleRental CreateMotorcycleRental(RentalPlan rentalPlan)
        {
            var motorcycleId = Guid.NewGuid();
            var deliveryPersonId = Guid.NewGuid();
            var createdAt = DateTime.UtcNow;
            var expectedEndDate = createdAt.Date.AddDays(rentalPlan.MinimumNumberOfDays + 1);

            return MotorcycleRental.Create(
                motorcycleId,
                deliveryPersonId,
                rentalPlan,
                expectedEndDate).Value!;
        }
    }
}
