import {useRef} from "react";

const Servicios = () => {
    const serRef = useRef(); 
    const cosRef = useRef();
    const durRef = useRef();
    return (<div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-3"><h2>Ingreso de servicios</h2></div>     
                    <div class="col-5"></div>               
                    <div class="col-2"></div>
                    <div class="col-2">                        
                    <div class="col-2"><label>Servicio:</label></div>
                    </div> 
                    <div class="col-3">         
                        <input type="text" class="form-control" id="servicio" ref={serRef}/>
                    </div>
                    <div class="col-5"></div>
                    <div class="col-2"></div>
                    <div class="col-2"><label>Descripción:</label></div>
                    <div class="col-3"><textarea class="form-control" id="exampleTextarea" rows="3"></textarea></div>
                    <div class="col-5"></div>
                    <div class="col-2"></div>
                    <div class="col-2"><label>Costo:</label></div>
                    <div class="col-3">         
                        <input type="text" class="form-control" id="servicio" ref={cosRef}/>
                    </div>
                    <div class="col-5"></div>
                    <div class="col-2"></div>
                    <div class="col-2"><label>Duración:</label></div>
                    <div class="col-3">         
                        <input type="text" class="form-control" id="servicio" ref={durRef}/>
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
 
export default Servicios;