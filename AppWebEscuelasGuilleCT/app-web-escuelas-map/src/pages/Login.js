import React, {useState, useEffect} from 'react';
//import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login(props){

//const baseUrl="https://localhost:5001/api/v1/escuelas";
const baseUrl="https://backendappescuelas.azurewebsites.net/api/v1/escuelas";

const cookies = new Cookies();

const [form, setForm]=useState({
    escuela:''
  });

const handleChange=e=>{
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
    }
const iniciarSesion=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
          return response.data;
        }).then(response=>{
          
            var respuesta=response.data;
            cookies.set('id', response.data.id, {path: '/'});
            // cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: '/'});
            // cookies.set('apellido_materno', respuesta.apellido_materno, {path: '/'});
            // cookies.set('nombre', respuesta.nombre, {path: '/'});
            // cookies.set('correo', respuesta.correo, {path: '/'});
            // cookies.set('username', respuesta.username, {path: '/'});
            // cookies.set('password', respuesta.password, {path: '/'});
            //alert("Bienvenido: "+ respuesta.id +" "+ respuesta.nome);
            props.history.push('/menu');
          
        })
        
        .catch(error=>{
          console.log(error);
        })
}

useEffect(()=>{
    if(cookies.get('id')){
      props.history.push('/menu');
    }
      },[]);

    return (
        <div className="containerPrincipal">
        <div className="containerLogin">
          <div className="form-group">
            <label>Escuela: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
            <br />
           
            <br />
            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );

}

    export default Login;

