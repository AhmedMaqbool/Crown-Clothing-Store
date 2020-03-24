import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

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

    handleSubmit=(event)=>{

        event.preventDefault();
        this.setState({email:'',password:''})
        
    }

  handleChange=event=>
  {
    const {value,name}=event.target;
      this.setState({[name]:value})
    }

  
   render()
   {
      return(
         
       <div className='SignIn'>
          <h2>I Already Have An Account</h2>
          <span>Sign In With Your Email and Password</span>
          
          <form onSubmit={this.handleSubmit}>
           <FormInput name="email" type='email' value={this.state.email} handleChange={this.handleChange} required label="email" />
           
           <FormInput name="passworld" type='password' handleChange={this.handleChange} value={this.state.email} label='password' />
           
           <CustomButton type='submit'>Sign In</CustomButton>
          </form>
          </div>

      );


   }



}

export default SignIn;