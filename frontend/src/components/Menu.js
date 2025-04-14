import React, { useState } from "react";
import "./Menu.css"
import VehicleTable from './VehicleTable';
import VehicleForm from "./VehicleForm";




const Menu = ({formComponent, tableComponent}) => {

    const [activeComponent, setActiveComponent] = useState("principal");

    return(
        
        <div className="container p-0">
            <div className="menu">
                <h2 className="title">Fleet manager</h2>

                <input className="menu-input" onClick={() => setActiveComponent("principal")} type="button" value="Principal" />

                <input className="menu-input" onClick={() => setActiveComponent("list")}  type="button" value="Listar veículos" />

                <input className="menu-input" onClick={() => setActiveComponent("register")}  type="button" value="Registrar veículo" />

                <input className="menu-input" type="button" value="Sair" />

                <p className="credits">Developed by <a href="#">Bruno Eckert</a></p>
            </div>
            <div className="sub-container">
                <div>
                {activeComponent === "principal" && <h2>Bem-vindo ao Fleet Manager!</h2> }    
                {activeComponent === "list" && tableComponent}
                {activeComponent === "register" && formComponent}
            </div>
        </div>
        </div>
    
    )
}

export default Menu;