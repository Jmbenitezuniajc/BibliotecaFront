import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import Inicio from './Inicio/Inicio';
import AgregarAutor from './AgregarAutor/AgregarAutor';
import AgregarUsuario from './AgregarUsuario/AgregarUsuario';
import AgregarLibro from "./AgregarLibro/AgregarLibro";
import GestionarUsuario from "./GestionarUsuario/GestionarUsuario";
import GestionarLibro from "./GestionarLibro/GestionarLibro";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="inicio" element={<Inicio />} />
      <Route path="agregarusuario" element={<AgregarUsuario />} />
      <Route path="agregarautor" element={<AgregarAutor />} />
      <Route path="agregarlibro" element={<AgregarLibro />} />
      <Route path="gestionarusuario" element={<GestionarUsuario />} />
      <Route path="gestionarlibro" element={<GestionarLibro />} />
    </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
