import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListaEscuelas from '../pages/ListaEscuelas'
import BuscadorEscuelas from '../pages/BuscadorEscuelas'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ListaEscuelas />} />
                <Route exact path="/escuelas/buscar" element={<BuscadorEscuelas />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes> 
        </BrowserRouter>

)


export default App