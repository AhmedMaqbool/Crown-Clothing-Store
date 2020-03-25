import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../FireBase/FireBase.util';


const Header=({currentUser})=>
(
<div className='header'>
<Link className='logo-conatiner' to="/">
<Logo className='logo' />
</Link >
<div className='options'>
<Link className='option' to='/shop'>Shop</Link>
<Link className='option' to='/shop'>Conatct</Link>
{
currentUser?
(<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>)
:
(<Link className='option' to='/signin'>Sign In</Link>)

}
</div>
</div>

);

export default Header; 
