import React from 'react';
import Homepage from './Pages/homepage';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/Shop';
import Header from './Components/Header/Header';




const HatsPage =()=> (
  <div>
    <h1>Hats Page</h1>
  </div>

)


function App() {
  return (
    <div>
    <Header /> 
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop'   component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
 