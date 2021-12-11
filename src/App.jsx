import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Servicios from './pages/Servicios/Servicios';
import Empleados from './pages/Empleados/Empleados';
import AsigServ from './pages/AsigServ/AsigServ';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Servicios />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/AsigServ" element={<AsigServ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
