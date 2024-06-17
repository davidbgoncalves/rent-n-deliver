using Minio;
using Minio.DataModel.Args;

namespace RentNDeliver.Infrastructure.Services.Storage;

public class MinioService
{
    private readonly MinioClient _minioClient;
    private readonly string _bucketName;
    private readonly string _endpoint;

    public MinioService(MinioConfiguration configuration)
    {
        _endpoint = configuration.Endpoint;
        _minioClient = new MinioClient();
        _minioClient.WithEndpoint(configuration.Endpoint)
            .WithCredentials(configuration.AccessKey, configuration.SecretKey)
            .Build();
        
        _bucketName = configuration.Bucket;
        CreateBucketIfNotExists().Wait();
    }

    private async Task CreateBucketIfNotExists()
    {
        bool found = await _minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket(_bucketName));
        if (!found)
        {
            await _minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket(_bucketName));
        }
    }

    public async Task<string> UploadFileAsync(string objectName, Stream data, long size, string contentType)
    {
        await _minioClient.PutObjectAsync(new PutObjectArgs()
            .WithBucket(_bucketName)
            .WithObject(objectName)
            .WithStreamData(data)
            .WithObjectSize(size)
            .WithContentType(contentType));

        // Construct the URL to the uploaded object
        return $"http://{_endpoint}/{_bucketName}/{objectName}";
    }
    
    public class MinioConfiguration()
    {
        public string Endpoint { get; init; } = string.Empty;
        public string AccessKey { get; init; } = string.Empty;
        public string SecretKey { get; init; } = string.Empty;
        public string Bucket { get; init; } = string.Empty;
    }
}
