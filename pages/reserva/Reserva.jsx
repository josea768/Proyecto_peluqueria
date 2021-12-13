const Reserva = () => {
    return (  
        
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}} style={{backgroundColor: '#1E90FF'}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Selecione el dia que desea reservar</h3>

            <div className="form-outline mb-4">
              <input type="date" id="start" className="trip-start" value={'0000/00/00'}/>
            </div>

            <div><h3> Disponibilidad: </h3></div>

            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input type="checkbox" />xxxxxxxx
                <input type="checkbox" />xxxxxxxx
                <input type="checkbox" />xxxxxxxx
                <input type="checkbox" />xxxxxxxx
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                   
            </div>
        </div>
      </div>
    </div>
  </div>
    );
}
 
export default Reserva;