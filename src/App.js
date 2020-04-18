import React from 'react';
import Homepage from './Pages/homepage';
import './App.css';
import {Route, Switch,Redirect} from 'react-router-dom';
import ShopPage from './Pages/Shop';
import Header from './Components/Header/Header';
import SignInandSignUp from './Pages/SignInandSignUp';
import {auth,createUserProfile} from './FireBase/FireBase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/user.actions';


class App extends React.Component {
  
  
unsubscribleFromAuthd =null;

componentDidMount()
{
   const {setCurrentUser}=this.props;
  
  this.unsubscribleFromAuth=auth.onAuthStateChanged(async userAuth=>{
    
    if(userAuth)
    {
      const userRef= await createUserProfile(userAuth);
      userRef.onSnapshot(snapShot=>{
         
        setCurrentUser({

           id:snapShot.id,
            ...snapShot.data()
          })

      });
      
    }
    else
    {
              
      setCurrentUser(userAuth);
    }
     
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
    <Header/> 
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop'   component={ShopPage}/>
    <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):<SignInandSignUp/>}/>  
    </Switch>
    </div>
  );
}
}

const mapStateToProps=({user})=>({
      
  currentUser:user.currentUser
  
  }); 

const mapDispatchToProps = dispatch =>({
      
setCurrentUser:user=>dispatch(setCurrentUser(user))
  
});

export default connect (null,mapDispatchToProps)(App);
 