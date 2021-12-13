import haircut from "./img/haircut.jpg"


function Servicios() {
    return (
            
      

        <div>
            
            <script src="js/jquery-latest.js"></script>
            <script src="js/bootstrap.js"></script>
            <link rel="stylesheet" href="app/css/bootstrap.min.css"/>
            <div className="container" style={{textAlign: 'center', marginTop: '1%'}}>
            <h1>Seleccione su servicio</h1>
            </div>
            <div className="container" style={{marginLeft: '1%', height: '600px', width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                
                <div class="card border-primary mb-3" style={{maxWidth: '20rem', marginLeft: '5%'}}>
                    <div class="card-header">Corte de cabello</div>
                    <div class="card-body">
                    <img src={haircut} alt="haircut" class="img-thumbnail" style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary btn-sm">Reserve</button>
                    </div>                   
                </div>
                
              


                <div class="card border-primary mb-3" style={{maxWidth: '20rem', marginLeft: '5%'}}>
                    <div class="card-header">Corte de cabello</div>
                    <div class="card-body">
                    <img src={haircut} alt="haircut" class="img-thumbnail" style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary btn-sm">Reserve</button>
                    </div>
                    
                </div>
                <div class="card border-primary mb-3" style={{maxWidth: '20rem', marginLeft: '5%'}}>
                    <div class="card-header">Corte de cabello</div>
                    <div class="card-body">
                    <img src={haircut} alt="haircut" class="img-thumbnail" style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary btn-sm">Reserve</button>
                    </div>
                    
                </div>
                <div class="card border-primary mb-3" style={{maxWidth: '20rem', marginLeft: '5%'}}>
                    <div class="card-header">Corte de cabello</div>
                    <div class="card-body">
                    <img src={haircut} alt="haircut" class="img-thumbnail" style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary btn-sm">Reserve</button>
                    </div>
                    
                </div>
            </div>
        </div>
       
      
      
    );
  }
  
  export default Servicios;