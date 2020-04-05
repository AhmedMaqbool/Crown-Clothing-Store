import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth,signInWithGoogle} from '../../FireBase/FireBase.util';

class SignIn extends React.Component
{
   constructor(props)
   {
       super(props);

       this.state={
         
        email:'',
        password:''
    
    };
    }

    handleSubmit=async event=>{

        event.preventDefault();
        const {email,password}=this.state;
        
        try {
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({email:'',password:''})
        } catch (error) {
           console.log(error);
        }
      
      };

  handleChange=event=>
  {
    const {value,name}=event.target;
      this.setState({[name]:value})
    };

  
   render()
   {
      return(
         
       <div className='SignIn'>
          <h2>I Already Have An Account</h2>
          <span>Sign In With Your Email and Password</span>
          
          <form onSubmit={this.handleSubmit}>
           <FormInput name='email' 
                     type='email' 
                     value={this.state.email} 
                     handleChange={this.handleChange} 
                     required 
                     label='email' />
           
           <FormInput name='password' 
                      type='password' 
                      handleChange={this.handleChange} 
                      value={this.state.password} 
                      label='password'
                      required  />
           
           <div className='buttons'>
           
           <CustomButton type='submit'>Sign In</CustomButton>
           
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In Google</CustomButton>
           </div>
           </form>
           </div>

      );


   }
}

export default SignIn;