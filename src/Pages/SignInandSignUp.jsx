import React from 'react';
import './SignInandSignnUp.scss';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';

const SignInandSignUp=()=>
(
   <div className='SignInandSignUp'>
   <SignIn/>
   <SignUp/>
   </div>
);

export default SignInandSignUp;