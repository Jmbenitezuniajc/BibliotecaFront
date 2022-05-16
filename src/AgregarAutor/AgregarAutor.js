import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';

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

function CrearUsuario(){
  const [name,setName]=useState("");
  const [lastname,setLastname]=useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('message')){
      
    }
  }, [])
  async function crear(){
    console.warn(name,lastname)
    let item={name,lastname};
    let result = await fetch("http://localhost:3001/CreateAuthor",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("message",JSON.stringify(result))
    window.alert("Bienvenido a nuestro sitio web");
  }
    return (
      <div className='parteuno'>
      <h1 className='titulo'>BIBLIOTECA</h1>  
        <label>
          <input type="text" placeholder="Name" onChange={(u)=>setName(u.target.value)} className ='textos' />
        </label>
        <br></br>
        <label>
          <input type="text" placeholder="Lastname" onChange={(u)=>setLastname(u.target.value)} className ='textos' />
        </label>
        <br></br>
        <button onClick={crear} className ='boton'>Login</button>
      </div>
    );

}

export default function AgregarAutor() {
  return (
    <div><Nav/> <CrearUsuario/></div>
  );
}


