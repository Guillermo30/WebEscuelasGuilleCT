import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route>
                <Route path="/" component= {<Login />}/>
                <Route path="/menu" component= {<Menu />}/>

            </Route>
        </Switch>
    
    </BrowserRouter>
  );
}

export default App;