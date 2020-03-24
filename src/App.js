import React from 'react';
import Homepage from './Pages/homepage';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/Shop';
import Header from './Components/Header/Header';
import SignInandSignUp from './Pages/SignInandSignUp';

function App() {
  return (
    <div>
    <Header /> 
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop'   component={ShopPage}/>
    <Route path='/signin' component={SignInandSignUp}/>  
    </Switch>
    </div>
  );
}

export default App;
 