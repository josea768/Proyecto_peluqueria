import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavegadorUF from "./components/pages/usuariointerno/navbar/NavegadorUF";
import Menu from "./components/pages/usuariointerno/navbar/menuagenda/Menu";
import VisualizarAgenda from "./components/pages/usuariointerno/agenda/VisualizarAgenda"
import CambiarEstado from "./components/pages/usuariointerno/agenda/CambiarEstado"
import CancelarReserva from "./components/pages/usuariointerno/agenda/CancelarReserva";
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
     <NavegadorUF />
     <Routes>
       <Route path='/Empleados' element={<Menu/>}/>
       <Route path='/Servicios' element={<Menu/>}/>
       <Route path='/Agenda' element={<Menu/>}/>
       <Route path='/VisualizarAgenda' element={<VisualizarAgenda/>}/>
       <Route path='/CambiarEstado' element={<CambiarEstado/>}/>
       <Route path='/CancelarReserva' element={<CancelarReserva/>}/>
     </Routes>
    </Router>
    </div>

  );
}

export default App;
