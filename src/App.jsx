import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';


function App() {
  const state = useState([])


  return (
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <Navbar bg="dark" variant="dart">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-sm-2" type="text" placeholder="Search"/> */}
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </Navbar>

      

      <Routes>
        <Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
