import React from 'react'
import Firma from '../Components/Firma'
import ListarEscuelas from '../Components/ListarEscuelas'
import AddButton from '../Components/AddButton'
import axios from 'axios'

class ListaEscuelas extends React.Component{

    state = {
        escuelas:[]
    }
    
    componentDidMount = () =>{
        var urlbase = 'https://backendappescuelas.azurewebsites.net';
        var request = '/api/v1/listasescuelas';
        axios.get(urlbase + request).then(res =>{
            this.setState({
                escuelas: res.data
                ,status:true
            });

        });
    }

    render (){

        return (
        <div>
            <ListarEscuelas
                escuelas = {this.state.escuelas}
            />
            <AddButton />
            <Firma
                username = "Guillermo"
            />
        </div>
        )
    }

}

export default ListaEscuelas