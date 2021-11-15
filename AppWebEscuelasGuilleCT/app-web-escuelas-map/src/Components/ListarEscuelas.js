import React from 'react'
import escuelaimg from '../images/exercise.png'
import Escuela from '../Components/Escuela'

const ListarEscuelas = ({escuelas})=> (
    <div>
             {escuelas.map((escuela)=> {
                    return (
                        <Escuela 
                            key = {escuela.id}
                            nombre = {escuela.nome}
                            email ={escuela.email}
                            description = {escuela.tipo}
                            imagen= {escuelaimg}
                            leftColor="#A74CF2"
                            rigthColor="#617BFB"
                        />
                    )
                })}
        </div>
)



export default ListarEscuelas