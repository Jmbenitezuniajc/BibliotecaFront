import React from 'react';
import {Link} from 'react-router-dom';

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

export default function AgregarUsuario() {
    return(
      <div>
        <Nav/>
        <h2>Agregar usuario</h2>;
      </div>
      
    ); 
  }