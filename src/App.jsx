import './App.css';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaCalificacion from "./pages/calificacion/index";
import Inicio from "./pages/inicio/index";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
  <Router>
     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path='/calificar' element={<PaginaCalificacion />}/>
     </Routes>
    </Router>
  );
}

export default App;
