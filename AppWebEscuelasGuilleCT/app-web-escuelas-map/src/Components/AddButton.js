import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../images/add.png'
import {Link} from 'react-router-dom'


function AddButton(props){
    return(
       <Link to = "/escuelas/buscar">
          <img src={buttomImg} className="Boton-Add"/>
       </Link> 
    )
}

export default AddButton