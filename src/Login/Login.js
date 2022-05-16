import './Login.css';
import React, { useState, useEffect } from 'react';
import logo from '../Img/LogoU.png';
import { useNavigate } from 'react-router-dom';

function Loginform(){
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('data')){
      navigate('/Inicio')
    }
  }, [])
  async function login(){
    console.warn(username,password)
    let item={username,password};
    let result = await fetch("http://localhost:3001/login",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("data",JSON.stringify(result))
    navigate('/Inicio')
  }
    return (
      <div className='parteuno'>
      <h1 className='titulo'>BIBLIOTECA</h1>  
        <label>
          <input type="text" placeholder="Username" onChange={(u)=>setUsername(u.target.value)} className ='textos' />
        </label>
        <br></br>
        <label>
          <input type="password" placeholder="Password" onChange={(u)=>setPassword(u.target.value)} className ='textos' />
        </label>
        <br></br>
        <button onClick={login} className ='boton'>Login</button>
      </div>
    );

}

class Logologin extends React.Component {
  
  render() {
    return (
      <div className='partedos'><img className = 'imagenlogo' src={logo} alt="logo" /></div>
    );
  }
}


function Login() {
  return (
    <div><Logologin/> <Loginform/></div>
  );
}

export default Login;
