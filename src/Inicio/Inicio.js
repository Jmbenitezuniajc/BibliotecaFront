import React from 'react';
import {Link} from 'react-router-dom';
import './Inicio.css';

function Nav() {
  return (
    <div>
    <nav className="navbar">
    <Link to="/">inicio</Link>
      <Link to="/AgregarUsuario">Agregar Usuario</Link>
      <Link to="/AgregarAutor">Agregar Autor</Link>
      <Link to="/AgregarLibro">Agregar Libro</Link>
      <Link to="/GestionarUsuario">Gestionar Usuario</Link>
      <Link to="/GestionarLibro">Gestionar Libro</Link>
    </nav>
    </div>
  );
}

export default function Inicio() {
  return (
    <div>
      <Nav/>
    </div>
  );
}