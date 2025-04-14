package com.fleetmanager.dto;

import org.springframework.stereotype.Component;

public class VehicleResponse {

    public VehicleResponse(String response){
        this.response = response;
    }

    public String response;

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
