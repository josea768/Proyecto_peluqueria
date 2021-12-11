const Item = (prps) => {
    const {tarea, toggleTask} = prps; 
    let { id, task, seleccionada} = tarea; 
    const handleOnChange = () => {
        toggleTask(id);
    };
    return <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleOnChange}/>
                <label class="form-check-label" for="flexCheckDefault">
                    {tarea.task}
                </label>
            </div>;
};
 
export default Item;