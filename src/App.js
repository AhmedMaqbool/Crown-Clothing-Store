import React from 'react';
import Homepage from './Pages/homepage'
import './App.css';
import {Route, Switch} from 'react-router-dom';



const HatsPage =()=> (
  <div>
    <h1>Hats Page</h1>
  </div>

)


function App() {
  return (
    <div>
    
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/hats'   component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
 