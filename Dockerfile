# Use a imagem do SDK do .NET baseada no Ubuntu
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Copie o código fonte e restaure as dependências
COPY . .
WORKDIR /source/src/RentNDeliver.Web

# Construa a aplicação
RUN dotnet publish -c Release -o /app

# Use a imagem de runtime do .NET baseada no Ubuntu
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copie os binários construídos para o contêiner final
COPY --from=build /app .

ENTRYPOINT ["dotnet", "RentNDeliver.Web.dll"]
