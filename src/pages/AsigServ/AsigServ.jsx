import { useState, useRef } from "react";
import Especialidades from "../../components/Especialidades";

const AsigServ = () => {
    
    const tareasIniciales = [
        {id:1, task:'Peluquería', seleccionada:false},
        {id:2, task:'Cosmetología', seleccionada:false},
        {id:3, task:'Masajes', seleccionada:false},
        {id:4, task:'Manicura', seleccionada:false},
        {id:5, task:'Podología', seleccionada:false}
    ]
    const [tareas, setTareas]= useState(tareasIniciales)  
    const toggleTask = (id) => {
        const newTasks = [...tareas];
        const task = newTasks.find((task) => task.id === id);
        task.seleccionada = !task.seleccionada;
        setTareas(newTasks);
        console.log(tareas);
    };
    return (<div class ="container">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-4"><h2>Asignación de servicios</h2></div>
                </div>
                <div class="row">
                    <div class="col-2"><label>Empleado</label></div>
                    <div class="col-6">
                    <select class="form-select" id="empleado">
                        <option>Jaime Cuadrado</option>
                        <option>José Díaz</option>
                        <option>Gilberto Uribe</option>
                        <option>Jessica Chacón</option>
                        <option>Brandon Gómez</option>
                    </select>
                    </div>  
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-2">
                        <Especialidades tareas={tareas} toggleTask={toggleTask}/>    
                    </div>  
                </div> 
                <div class="row">                    
                    <div class="d-flex justify-content-center">
                        <fieldset>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </fieldset>
                    </div>                            
                </div>            
            </div>);
}

export default AsigServ;