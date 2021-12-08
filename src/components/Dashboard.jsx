import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarChart from './BarChart';
import '../App.css';
import { Chart } from 'chart.js';


const metricas = [
    { mount: "enero", year: "2022", day:"lunes", day_num: 3, numCitas:7, numPacAtend: 7, hour: "8:30"},
    { mount: "enero", year: "2022", day:"martes", day_num: 4, numCitas:8, numPacAtend: 8, hour: "8:30"},
    { mount: "enero", year: "2022", day:"miercoles", day_num: 5, numCitas:8, numPacAtend: 6, hour: "8:30"},
    { mount: "enero", year: "2022", day:"jueves", day_num: 6, numCitas:12, numPacAtend: 11, hour: "8:30"},
    { mount: "enero", year: "2022", day:"viernes", day_num: 7, numCitas:11, numPacAtend: 11, hour: "8:30"},
    { mount: "enero", year: "2022", day:"lunes", day_num: 10, numCitas:9, numPacAtend: 8, hour: "8:30"},
    { mount: "enero", year: "2022", day:"martes", day_num: 11, numCitas:8, numPacAtend: 5, hour: "8:30"},

];



const Dashboard = () => {
    const [metricas, setMetricas] = useState();

    return (
    <div className="d-flex">
        <div id="sidebar-container" className="bg-primary">
            <div className="logo">
                <h4 className="text-light font-weight-bold">SERVICIOS</h4>
            </div>
            <div className="link-d">
                <Link className="d-block p-3 text-light" to="/dashboard">CepilladoPelo</Link>
                <Link className="d-block p-3 text-light" to="/dashboard">AplicTinte</Link>
                <Link className="d-block p-3 text-light" to="/dashboard">Queratina</Link>
                <Link className="d-block p-3 text-light" to="/dashboard">LimpFacial</Link>

            </div>
        </div>
        
        <div id="content-dash">
            <section className="py-3">
                <div className="container-head">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className="font-weight-bold mb-0">Bienvenido a la peluqueria</h1>
                            <p className="lead text-muted">Revisa la última información</p>
                        </div>
                        <div className="col-lg-3 d-flex">
                            <button className="btn btn-primary w-100 align-self-center">Descargar reporte</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-head">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-lg-3 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ingresos mensuales</h6>
                                        <h3 className="font-weight-bold">$50.000</h3>
                                        <h6 className="text-success">50.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ingresos mensuales</h6>
                                        <h3 className="font-weight-bold">$50.000</h3>
                                        <h6 className="text-success">50.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ingresos mensuales</h6>
                                        <h3 className="font-weight-bold">$50.000</h3>
                                        <h6 className="text-success">50.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ingresos mensuales</h6>
                                        <h3 className="font-weight-bold">$50.000</h3>
                                        <h6 className="text-success">50.50%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-grey">
                <div className="container-dash">
                    <div className="row">
                        <div className="col-lg-8 my-3">
                            <div className="card rounded-0">
                                <div className="card-header bg-light">
                                    <h6 className="font-weght-bold mb-0">Numero de citas</h6>
                                </div>
                                <div className="card-body">
                                    <canvas id="myChart" width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
    );

};

export default Dashboard;