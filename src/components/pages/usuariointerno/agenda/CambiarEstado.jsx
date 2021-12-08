import React from "react";
import { Link } from 'react-router-dom'

const CambiarEstado = () => {

    const data = [

        { id: 1, name: "Alberto Areas", servicio: "Cote de Cabello", horai: '9:00 am', horaf: '9:30 am', completed: 'Completado' },
        { id: 2, name: "Catalina Duran", servicio: "Peinado", horai: '11:00 am', horaf: '11:30 am', completed: 'Programado' },
        { id: 3, name: "Carlos Rodriguez", servicio: "Tinte", horai: '1:00 pm', horaf: '2:30 pm', completed: 'Cancelado' },

    ];

    const renderPlayer = (data, index) => {
        return (
            <tr key={index} class="table-active">
                <td>{data.name}</td>
                <td>{data.servicio}</td>
                <td>{data.horai + " - " + data.horaf}</td>
                <td>
                    <div className="d-inline-flex">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option value="Completado">Completado</option>
                            <option value="Programado">Programado</option>

                        </select>
                    </div>
                </td>
            </tr>
        )


    }

    return (
        <div>
            <div class="d-flex justify-content-center align-items-center">
                <ul class="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to='/VisualizarAgenda' aria-aria-current="page">Visualizar Agenda</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  active" to='/CambiarEstado' aria-aria-current="page">Cambiar Estado</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/CancelarReserva' aria-aria-current="page">Cancelar Reserva</Link>
                    </li>
                </ul>
            </div>

            <div className="d-flex justify-content-center">
                <form class="form-inline my-2 my-lg-0">
                    <input className="form-control my-2 "
                        type="text"
                        placeholder="Buscar Nombre" />
                        
                    <button type="button" className="btn btn-success">
                        <option value="Buscar">Buscar</option>
                    </button>
                </form>
            </div>
            <p>

            </p>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Empleado</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Hora Inicio-Fin</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderPlayer)}

                </tbody>
            </table>

        </div>);
}

export default CambiarEstado;
