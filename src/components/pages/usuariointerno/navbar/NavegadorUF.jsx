//import Menu from "./Menuagenda/Menu";
import React from "react";
import {Link} from 'react-router-dom'



const NavegadorUF = () => {
  return (
    <body >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/'>
          <img src='./logo.png' width='70'></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/Empleados' aria-aria-current="page">Empleados</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Servicios' aria-aria-current="page">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Agenda' aria-aria-current="page">Agenda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </body>
);
}

export default NavegadorUF;