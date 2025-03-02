package com.fleetmanager.controller;

import com.fleetmanager.model.Vehicle;
import com.fleetmanager.service.VehicleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VehicleController {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleController(VehicleService vehicleService){
        this.vehicleService = vehicleService;
    }

    // Method to register a vehicle.
    @PostMapping("/vehicles")
    public ResponseEntity<?> registerVehicle(@Valid @RequestBody Vehicle vehicle){
        return vehicleService.registerVehicle(vehicle);
    }

    // Method to retrieve all vehicles
    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles(){
        List<Vehicle> vehicles = vehicleService.getAllVehicles();
        return ResponseEntity.ok(vehicles);
    }

    // Method to change a vehicle
    @PutMapping("/vehicles/{id}")
    public ResponseEntity<?> changeVehicle(@Valid @PathVariable Long id, @RequestBody Vehicle vehicle){
        return vehicleService.changeVehicle(id, vehicle);
    }

    // Method to delete a vehicle
    @DeleteMapping("/vehicles/{id}")
    public ResponseEntity<?> removeVehicle(@Valid @PathVariable Long id){
        return vehicleService.removeVehicle(id);
    }


}
