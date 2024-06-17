﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RentNDeliver.Infrastructure.Persistence;

#nullable disable

namespace RentNDeliver.Infrastructure.Migrations
{
    [DbContext(typeof(RentNDeliverDbContext))]
    [Migration("20240616235126_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("RentNDeliver.Domain.DeliveryPeople.DeliveryPerson", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("CnhImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("CnhNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CnhType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Cnpj")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("CnhNumber")
                        .IsUnique();

                    b.HasIndex("Cnpj")
                        .IsUnique();

                    b.ToTable("DeliveryPeople");
                });

            modelBuilder.Entity("RentNDeliver.Domain.Motorcycles.Motorcycle", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("LicensePlate")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdateAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Year")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("LicensePlate")
                        .IsUnique();

                    b.ToTable("Motorcycles");
                });

            modelBuilder.Entity("RentNDeliver.Domain.Rentals.MotorcycleRental", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("DeliveryPersonId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("ExpectedEndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("MotorcycleId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<decimal?>("TotalCost")
                        .HasColumnType("numeric");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("DeliveryPersonId");

                    b.HasIndex("MotorcycleId");

                    b.ToTable("MotorcycleRentals");
                });

            modelBuilder.Entity("RentNDeliver.Domain.Rentals.MotorcycleRental", b =>
                {
                    b.HasOne("RentNDeliver.Domain.DeliveryPeople.DeliveryPerson", "DeliveryPerson")
                        .WithMany()
                        .HasForeignKey("DeliveryPersonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("RentNDeliver.Domain.Motorcycles.Motorcycle", "Motorcycle")
                        .WithMany()
                        .HasForeignKey("MotorcycleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsOne("RentNDeliver.Domain.Rentals.RentalPlan", "RentalPlan", b1 =>
                        {
                            b1.Property<Guid>("MotorcycleRentalId")
                                .HasColumnType("uuid");

                            b1.Property<decimal>("AdditionalDayFee")
                                .HasColumnType("numeric")
                                .HasColumnName("RentalPlanAdditionalDayFee");

                            b1.Property<decimal>("DayCost")
                                .HasColumnType("numeric")
                                .HasColumnName("RentalPlanDayCost");

                            b1.Property<decimal>("EarlyDeliveryFee")
                                .HasColumnType("numeric")
                                .HasColumnName("RentalPlanEarlyDeliveryFee");

                            b1.Property<int>("MinimumNumberOfDays")
                                .HasColumnType("integer")
                                .HasColumnName("RentalPlanMinimumNumberOfDays");

                            b1.Property<string>("Name")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("RentalPlanName");

                            b1.Property<Guid>("RentalPlanId")
                                .HasColumnType("uuid")
                                .HasColumnName("RentalPlanId");

                            b1.HasKey("MotorcycleRentalId");

                            b1.ToTable("MotorcycleRentals");

                            b1.WithOwner()
                                .HasForeignKey("MotorcycleRentalId");
                        });

                    b.Navigation("DeliveryPerson");

                    b.Navigation("Motorcycle");

                    b.Navigation("RentalPlan")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}