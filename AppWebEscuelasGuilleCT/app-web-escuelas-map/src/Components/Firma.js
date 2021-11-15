import React from 'react'
import './styles/Firma.css'

const Firma = ({username}) =>(
        <div className="container">
            <div className="Firma-User-Info">
                <p>Realizado por: {username}</p>
            </div>
        </div>
)

export default Firma


