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

2. Buildar a aplicacao no Docker 
    ```sh
    docker compose up --build .

3. Rode os migrations
    ```ss
   dotnet ef database update 
   --project RentNDeliver.Infrastructure/RentNDeliver.Infrastructure.csproj 
   --startup-project RentNDeliver.Web/RentNDeliver.Web.csproj 
   --connection "Host=localhost:5432;Database=RentNDeliverDb;Username=postgres;Password=#123Mudar"

4. Agora é so acessar a pagina inicial
   http://localhost:8080

## Utilizando a aplicação

A página inicial vai te perguntar qual o seu perfil, se quiser simular o usuário admin, selecione a opcão Employee.

Caso queira simular a aplicação como um entregador, só escolher a opção Customer.


   

