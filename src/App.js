import React from 'react';
import Homepage from './Pages/homepage';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/Shop';
import Header from './Components/Header/Header';
import SignInandSignUp from './Pages/SignInandSignUp';
import {auth} from './FireBase/FireBase.util';


class App extends React.Component {
  
constructor (props)
{
   super(props);
   this.state={
         
      currentUser:null 
  
  };
}

unsubscribleFromAuth=null;

componentDidMount()
{
   this.unsubscribleFromAuth=auth.onAuthStateChanged(user=>{
     this.setState({currentUser:user})
      console.log(user);
    });
   
}

componentWillUnmount()
{
  this.unsubscribleFromAuth();
}

render()
{

  return (
    <div>
    <Header currentUser={this.state.currentUser } /> 
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop'   component={ShopPage}/>
    <Route path='/signin' component={SignInandSignUp}/>  
    </Switch>
    </div>
  );
}
}

export default App;
 