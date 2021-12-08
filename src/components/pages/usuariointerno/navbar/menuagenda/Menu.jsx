//import VisualizarAgenda from "./components/Agenda/VisualizarAgenda";
import React from "react";
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <div className="container">
      <div class="d-flex justify-content-center align-items-center">
        <ul class="nav nav-tabs">
          <li className="nav-item ">
          <Link className="nav-link" to='/VisualizarAgenda' aria-aria-current="page">Visualizar Agenda</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/CambiarEstado' aria-aria-current="page">Cambiar Estado</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/CancelarReserva' aria-aria-current="page">Cancelar Reserva</Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Menu;