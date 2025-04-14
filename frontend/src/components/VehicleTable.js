import React, { useEffect, useState } from "react";
import "./VehicleTable.css"



function VehicleTable({vehicles}){


    return(
        <div className="table-container">
            <h2>Listar veículos</h2>
        <table className="table">
            
            <thead>
                <tr> 
                    <th >Id</th>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Cor</th>
                    <th>Ano</th>
                    <th>Editar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vehicles.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.id}</td>
                            <td>{obj.licensePlate}</td>
                            <td>{obj.brand}</td>
                            <td>{obj.model}</td>
                            <td>{obj.color}</td>
                            <td>{obj.year}</td>
                            <td><div className="dropdown">
                            <img className="settings-logo dropdown-toggle" alt="settings-icon" src={require('../settings-icon.png')} role="button" data-bs-toggle="dropdown" aria-expanded="false"></img>

                            <ul className="dropdown-menu">

                                <li className="menu-item"><a href="http">Editar</a></li>
                                <li className="menu-item"><a href="http">Excluir</a></li>

                            </ul>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div> 
    )
}

export default VehicleTable;