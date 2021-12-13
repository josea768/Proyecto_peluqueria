function Registro() {
    return (     
        <div className="mask d-flex align-items-center h-100 gradient-custom-3" style={{marginTop: '15px'}}>
    <div className="container h-100" >
      <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6" >
          <div className="card" style={{borderRadius: '15px'}} style={{backgroundColor: '#1E90FF'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-3">Cree una cuenta</h2>

              <form>

                <div className="form-outline mb-1">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Nombre</label>
                </div>

                <div className="form-outline mb-">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example3cg">Email</label>
                </div>

                <div className="form-outline mb-1">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Telefono</label>
                </div>                

                <div className="form-outline mb-1">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cg">Contraseña</label>
                </div>

                <div className="form-outline mb-1">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg">Repita su contraseña</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-info btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">¿Ya tiene una cuenta? <a href="#!" className="fw-bold text-body"><u>Inicie sesion aqui</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    );
  }
  
  export default Registro;
