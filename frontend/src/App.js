import React, {useEffect, useState} from 'react';
import './App.css';
import VehicleTable from './components/VehicleTable.js';
import Menu from './components/Menu.js'
import VehicleForm from './components/VehicleForm.js';


function App() {

  const vehicle = {
    licensePlate: '',
    brand: '',
    model: '',
    color: '',
    year: 0
  }

  // UseState
  const [vehicles, setVehicles] = useState([])
  const [objVehicle, setObjVehicle] = useState(vehicle)

  // Method to get data from db 
  const fetchVehicles = () => {
    fetch("http://localhost:8080/api/vehicles")
    .then(retorno => retorno.json())
    .then(json_retorno => setVehicles(json_retorno))
  };

  // This one render the data
  useEffect(() => {
    fetchVehicles();
  }, [])

   // Method to get data from the form and send it to a JSON
   const formToDb = (e) => {
    setObjVehicle({...objVehicle, [e.target.name]:e.target.value})
  }

  // Method to send data to db
  const register = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/vehicles",{
      method:'post',
      body:JSON.stringify(objVehicle),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(converted_response => {
      console.log(converted_response.response);
      if(converted_response.response === undefined){
        alert("Erro! Revise os campos");
      }else{
        console.log(converted_response.response);
        
      setVehicles([...vehicles, converted_response]);
      alert("Veículo registrado! =)");
      cleanForm();
      fetchVehicles();
      }
    })
     
  }

  const cleanForm = () => {
    setObjVehicle(vehicle)
  }


  return (
    <div className="App">
      <Menu tableComponent={<VehicleTable vehicles={vehicles} />} formComponent={<VehicleForm formToDbFunc={formToDb} register={register} obj={objVehicle} />}  />
    </div>
  );
}


export default App;
