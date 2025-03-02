package com.fleetmanager.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @NotBlank(message = "License plate cannot be empty")
    @Size(min = 7, max = 7, message = "License plate must have exactly 7 characters")
    private String licensePlate;

    @Column(nullable = false)
    @NotBlank(message = "Brand cannot be empty")
    private String brand;

    @Column(nullable = false)
    @NotBlank(message = "Model cannot be empty")
    private String model;

    @Column(nullable = false)
    @NotBlank(message = "Color cannot be empty")
    private String color;

    @NotNull(message = "Year cannot be null")
    @Min(value = 1980, message = "Year must be at least 1980")
    @Max(value = 2025, message = "Year cannot be greater than 2025")
    private Integer year;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }
}
