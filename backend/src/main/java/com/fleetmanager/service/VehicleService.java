package com.fleetmanager.service;

import com.fleetmanager.dto.VehicleResponse;
import com.fleetmanager.model.Vehicle;
import com.fleetmanager.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;


    @Autowired
    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    // Method to add a new vehicle
    public ResponseEntity<?> registerVehicle(Vehicle vehicle){
        vehicleRepository.save(vehicle);
        VehicleResponse response = new VehicleResponse("Vehicle registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // Method to retrieve all vehicles
    public List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();
    }

    // Method to change a vehicle
    public ResponseEntity<?> changeVehicle(Long id, Vehicle vehicle) {
        Optional<Vehicle> existingVehicle = vehicleRepository.findById(id);
        if(existingVehicle.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new VehicleResponse("Vehicle not found"));
        }
        vehicle.setId(id);
        vehicleRepository.save(vehicle);
        return ResponseEntity.status(HttpStatus.OK).body(new VehicleResponse("Vehicle updated successfully"));
    }

    // Metod to remove a vehicle
    public ResponseEntity<?> removeVehicle(Long id) {
        if(!vehicleRepository.existsById(id)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new VehicleResponse("Vehicle not found"));
        }
        vehicleRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new VehicleResponse("Vehicle deleted sucessfully"));
    }
}
