import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="menu" element={<Menu />} />
        </Routes> 
        {/* <Login />  */}
    </BrowserRouter>
  );
}

export default App;