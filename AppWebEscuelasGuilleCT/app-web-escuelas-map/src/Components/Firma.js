import React from 'react'
import './styles/Firma.css'

function Firma(props){
     return(
        <div className="container">
            <div className="Firma-User-Info">
                <p>Realizado por: {props.username}!</p>
        </div>
    </div>
     )
}

export default Firma


