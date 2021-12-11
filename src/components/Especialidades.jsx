import Item from "./Item";

const  Especialidades= (prps) => {
    const {tareas, toggleTask} = prps;
    return (     
        <div>
        {tareas.map((tarea) => {
        return <Item key={tarea.id} tarea={tarea} toggleTask={toggleTask}/>;
        })}                    
        </div>);     
}; 
export default Especialidades;