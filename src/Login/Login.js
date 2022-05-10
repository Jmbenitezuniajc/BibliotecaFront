import './Login.css';
import React from 'react';
import logo from '../Img/LogoU.png';

class Logologin extends React.Component {
  
  render() {
    return (
      <div className='partedos'><img className = 'imagenlogo' src={logo} alt="logo" /></div>
    );
  }
}

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.password = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangepass(event) {
    this.setPassword({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Username: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='parteuno'>
      <h1 className='titulo'>BIBLIOTECA</h1>  
      <form className='formlogin' onSubmit={this.handleSubmit}>
        
        <label>
          <input className ='textos' type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          <input className ='textos' placeholder="Password" type="text" value={this.password.value} onChange={this.handleChangepass} />
        </label>
        <br></br>
        <input className ='boton' type="submit" value="Iniciar sesión" />
      </form>
      </div>
    );
  }
}


function Login() {
  return (
    <div><Logologin/> <Loginform/></div>
  );
}

export default Login;
