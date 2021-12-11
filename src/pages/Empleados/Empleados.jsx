import { useState, useRef } from "react";
import Especialidades from "../../components/Especialidades";

const Empleados = () => {
    
    const tareasIniciales = [
        {id:1, task:'Peluquería', seleccionada:false},
        {id:2, task:'Cosmetología', seleccionada:false},
        {id:3, task:'Masajes', seleccionada:false},
        {id:4, task:'Manicura', seleccionada:false},
        {id:5, task:'Podología', seleccionada:false}
    ]
    const [tareas, setTareas]= useState(tareasIniciales)  
    const nomRef = useRef(); 
    const apeRef = useRef();
    const cedRef = useRef();
    const fecRef = useRef();
    const epsRef = useRef();
    const afpRef = useRef();
    const arlRef = useRef();
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
                    <div class="col-4"><h2>Ingreso de empleados</h2></div>
                </div>
                <div class="row">
                    <div class="col-2"><label>Nombres:</label></div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="nombre" ref={nomRef}/>
                    </div>  
                    <div class="col-3"></div>    
                    <div class="col-2"><label>Apellidos:</label></div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="apellido" ref={apeRef}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4">
                                <label>Fecha de ingreso:</label>
                            </div>
                            <div class="col-5">
                                <input type="date" class="form-control" id="nombre" ref={fecRef}/>
                            </div>
                            <div class="col-4">
                                <label>Cédula:</label>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" id="cedula" ref={cedRef}/>
                            </div>
                            <div class="col-4">
                                <label>EPS:</label>
                            </div>
                            <div class="col-5">
                                <div><input type="text" class="form-control" id="eps" ref={epsRef}/></div>
                            </div>
                            <div class="col-4">
                                <label>AFP:</label>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" id="afp" ref={afpRef}/>
                            </div>
                            <div class="col-4">
                                <label>ARL:</label>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" id="arl" ref={arlRef}/>    
                            </div>
                        </div>                      
                    </div>
                    <div class="col-5">
                        <div class="row">                        
                            <label>Especialidades:</label>
                        </div>
                        <div class="row">                        
                            <Especialidades tareas={tareas} toggleTask={toggleTask}/>
                        </div>
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

export default Empleados;