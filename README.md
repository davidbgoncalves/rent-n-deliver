# RentNDeliver

## Descrição
Aplicação para gerenciar aluguel de motos e entregadores.

## Tecnologias Utilizadas
- .NET Core
- C#
- PostgreSQL
- RabbitMQ 
- Amazon S3 

## Requisitos para rodar o projeto
- .NET SDK 8.0
- Docker 

## Configuração do Ambiente
1. Clone o repositório:
   ```sh
   git clone https://github.com/davidbgoncalves/rent-n-deliver.git
   cd rent-n-deliver


## Comandos para rodar os migrations
1. Criação dos arquivos de Migrations 
    dotnet ef migrations add Initial --project RentNDeliver.Infrastructure/RentNDeliver.Infrastructure.csproj --startup-project RentNDeliver.Web/RentNDeliver.Web.csproj --context RentNDeliver.Infrastructure.Persistence.RentNDeliverDbContext -v
2. Rodar script no banco de dados
   dotnet ef database update --project RentNDeliver.Infrastructure/RentNDeliver.Infrastructure.csproj --startup-project RentNDeliver.Web/RentNDeliver.Web.csproj --connection "Host=localhost:5432;Database=RentNDeliverDb;Username=postgres;Password=#123Mudar"

