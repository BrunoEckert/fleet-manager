import './VehicleForm.css'

function VehicleForm({formToDbFunc, register, obj}){

    return(
        <form>
            <h2 className="titulo">Registrar veículo</h2>
           
           <label htmlFor="marca" >Marca</label>
           <input className='form-input' value={obj.brand} onChange={formToDbFunc}  name='brand' type="text" id="marca"></input>
           

           <label htmlFor="modelo" >Modelo</label>
           <input className='form-input' value={obj.model} onChange={formToDbFunc} name='model' type="text" id="modelo"></input>
     
           
           <label htmlFor="placa" >Placa</label>
           <input className='form-input' value={obj.licensePlate} onChange={formToDbFunc} name='licensePlate' type="text" id="placa" ></input>

           <label htmlFor="cor">Cor</label>
           <select className='form-input' value={obj.color} onChange={formToDbFunc} name='color' id="cor" defaultValue="" >
               <option disabled value="">Selecione uma cor</option> 
               <option value="branco">Branco</option>
               <option value="preto">Preto</option>
               <option value="cinza">Cinza</option>
               <option value="outro">Outro</option>
           </select>

           <label htmlFor="ano" >Ano</label>
           <input className='form-input' value={obj.year} onChange={formToDbFunc} name='year' type="number" id="ano" ></input>

           <div className="buttons">
               <button type="reset">Limpar campos</button>
               <button type="submit" onClick={register}>Criar veículo</button>
           </div>
        </form>
    )
}

export default VehicleForm;