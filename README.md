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
1. Abra o terminal e acesse o diretório onde deseja baixar os arquivos fonte

2. Clone o repositório e acesso o diretório raiz:
   ```sh
   git clone https://github.com/davidbgoncalves/rent-n-deliver.git
   cd rent-n-deliver

3. Compilar a aplicacao no Docker:
    ```sh
    docker compose up -d --build
   
4. Acessar o diretório de fontes
   ```sh
   cd src

5. Rode os migrations:
   ```bash
   dotnet ef database update --project RentNDeliver.Infrastructure/RentNDeliver.Infrastructure.csproj \
   --startup-project RentNDeliver.Web/RentNDeliver.Web.csproj \
   --connection "Host=localhost:5432;Database=RentNDeliverDb;Username=postgres;Password=#123Mudar"
   
6. Agora é so acessar a pagina inicial
   http://localhost:8080

## Utilizando a aplicação

A página inicial vai te perguntar qual o seu perfil, se quiser simular o usuário admin, selecione a opcão Employee.
Caso queira simular a aplicação como um entregador, só escolher a opção Customer.

## Sempre que quiser voltar para o ínicio da aplicação, só clicar no logo no Header escrito Metronic.



   

