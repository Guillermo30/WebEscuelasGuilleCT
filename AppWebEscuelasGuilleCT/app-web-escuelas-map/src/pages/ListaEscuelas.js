import React from 'react'
import Firma from '../Components/Firma'
import ListarEscuelas from '../Components/ListarEscuelas'
import AddButton from '../Components/AddButton'

class ListaEscuelas extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            data:
            [
                {
                    "dataExtracao": "2021-01-01T04:16:00",
                    "depAdministrativa": "MUNICIPAL",
                    "tipo": "EDUCAÇÃO INFANTIL",
                    "codigo": 101,
                    "inep": 43107672,
                    "nome": "EMEI JP CANTINHO AMIGO",
                    "abrNome": "CANTINHO",
                    "logradouro": "PCA GARIBALDI",
                    "numero": 1,
                    "bairro": "AZENHA",
                    "cep": 90050020,
                    "latitude": -30.0441000000,
                    "longitude": -51.2194000000,
                    "telefone": 32271906,
                    "email": "emei.cantinhoamigo@smed.prefpoa.com.br",
                    "urlWebsite": "http://websmed.portoalegre.rs.gov.br/escolas/cantinhoamigo/",
                    "blog": null,
                    "twitter": null,
                    "facebook": null,
                    "regConselhoTutelar": 8,
                    "descRegConselhoTutelar": "CENTRO",
                    "regOrcamentoPart": 16,
                    "descRegOrcamentoPart": "CENTRO",
                    "situacaoFuncionamento": "EM ATIVIDADE",
                    "convenioMunicipal": false,
                    "convenioEstadual": 0,
                    "convenioFederal": 0,
                    "convenioFasc": 0,
                    "escolaEspecial": false,
                    "catPartPrivada": 0,
                    "catPartComunitaria": false,
                    "catPartConfessional": false,
                    "catPartFilantropica": false,
                    "mantEmpresaPrivada": 0,
                    "mantSindicato": false,
                    "mantSistemaS": 0,
                    "mantOng": 0,
                    "mantApae": false,
                    "id": 1
                },
                {
                    "dataExtracao": "2021-01-01T04:16:00",
                    "depAdministrativa": "MUNICIPAL",
                    "tipo": "EDUCAÇÃO INFANTIL",
                    "codigo": 102,
                    "inep": 43107680,
                    "nome": "EMEI JP CIRANDINHA",
                    "abrNome": "CIRANDINHA",
                    "logradouro": "RUA VINTE E QUATRO DE OUTUBRO",
                    "numero": 211,
                    "bairro": "INDEPENDÊNCIA",
                    "cep": 90510002,
                    "latitude": -30.0278000000,
                    "longitude": -51.2050000000,
                    "telefone": 33461600,
                    "email": "emei.cirandinha@smed.prefpoa.com.br",
                    "urlWebsite": "http://websmed.portoalegre.rs.gov.br/escolas/cirandinha/",
                    "blog": null,
                    "twitter": null,
                    "facebook": null,
                    "regConselhoTutelar": 8,
                    "descRegConselhoTutelar": "CENTRO",
                    "regOrcamentoPart": 16,
                    "descRegOrcamentoPart": "CENTRO",
                    "situacaoFuncionamento": "EM ATIVIDADE",
                    "convenioMunicipal": false,
                    "convenioEstadual": 0,
                    "convenioFederal": 0,
                    "convenioFasc": 0,
                    "escolaEspecial": false,
                    "catPartPrivada": 0,
                    "catPartComunitaria": false,
                    "catPartConfessional": false,
                    "catPartFilantropica": false,
                    "mantEmpresaPrivada": 0,
                    "mantSindicato": false,
                    "mantSistemaS": 0,
                    "mantOng": 0,
                    "mantApae": false,
                    "id": 2
                },
                {
                    "dataExtracao": "2021-01-01T04:16:00",
                    "depAdministrativa": "MUNICIPAL",
                    "tipo": "EDUCAÇÃO INFANTIL",
                    "codigo": 103,
                    "inep": 43107699,
                    "nome": "EMEI JP GIRAFINHA",
                    "abrNome": "GIRAFINHA",
                    "logradouro": "PCA JAYME TELLES",
                    "numero": 1,
                    "bairro": "SANTANA",
                    "cep": 90650100,
                    "latitude": -30.0521000000,
                    "longitude": -51.2053000000,
                    "telefone": 32192589,
                    "email": "emei.girafinha@smed.prefpoa.com.br",
                    "urlWebsite": "http://websmed.portoalegre.rs.gov.br/escolas/girafinha/",
                    "blog": null,
                    "twitter": null,
                    "facebook": null,
                    "regConselhoTutelar": 8,
                    "descRegConselhoTutelar": "CENTRO",
                    "regOrcamentoPart": 16,
                    "descRegOrcamentoPart": "CENTRO",
                    "situacaoFuncionamento": "EM ATIVIDADE",
                    "convenioMunicipal": false,
                    "convenioEstadual": 0,
                    "convenioFederal": 0,
                    "convenioFasc": 0,
                    "escolaEspecial": false,
                    "catPartPrivada": 0,
                    "catPartComunitaria": false,
                    "catPartConfessional": false,
                    "catPartFilantropica": false,
                    "mantEmpresaPrivada": 0,
                    "mantSindicato": false,
                    "mantSistemaS": 0,
                    "mantOng": 0,
                    "mantApae": false,
                    "id": 3
                }
            ]
        }
    }

    render (){

        return (
        <div>
            <ListarEscuelas
                escuelas = {this.state.data}
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