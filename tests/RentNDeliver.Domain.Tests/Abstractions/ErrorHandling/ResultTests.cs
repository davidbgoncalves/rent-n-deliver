using RentNDeliver.Domain.Abstractions.ErrorHandling;

namespace RentNDeliver.Domain.Tests.Abstractions.ErrorHandling
{
    public class ResultTests
    {
        [Fact]
        public void Success_ShouldReturnSuccessResult()
        {
            // Act
            var result = Result.Success();

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(string.Empty, result.Error);
        }

        [Fact]
        public void Failure_ShouldReturnFailureResult()
        {
            // Arrange
            var errorMessage = "An error occurred";

            // Act
            var result = Result.Failure(errorMessage);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(errorMessage, result.Error);
        }

        [Fact]
        public void SuccessT_ShouldReturnSuccessResultWithValue()
        {
            // Arrange
            var value = 42;

            // Act
            var result = Result<int>.Success(value);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(value, result.Value);
            Assert.Equal(string.Empty, result.Error);
        }

        [Fact]
        public void FailureT_ShouldReturnFailureResultWithError()
        {
            // Arrange
            var errorMessage = "An error occurred";

            // Act
            var result = Result<int>.Failure(errorMessage);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(default(int), result.Value);
            Assert.Equal(errorMessage, result.Error);
        }
        [Fact]
        public void SuccessT_ShouldReturnSuccessResultWithReferenceType()
        {
            // Arrange
            var value = "Success";

            // Act
            var result = Result<string>.Success(value);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(value, result.Value);
            Assert.Equal(string.Empty, result.Error);
        }

        [Fact]
        public void FailureT_ShouldReturnFailureResultWithNullValueForReferenceType()
        {
            // Arrange
            var errorMessage = "An error occurred";

            // Act
            var result = Result<string>.Failure(errorMessage);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Null(result.Value);
            Assert.Equal(errorMessage, result.Error);
        }
    }
}