import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../FireBase/FireBase.util';
import {connect} from 'react-redux';
import CartIcon from '../Cart-Icon/cart-icon';
import CardDropDown from '../CardDropDown/Card-Drop-Down';

const Header=({currentUser,hidden})=>
(
<div className='header'>
<Link className='logo-conatiner' to="/">
<Logo className='logo' />
</Link>
<div className='options'>
<Link className='option' to='/shop'>Shop</Link>
<Link className='option' to='/shop'>Conatct</Link>
{
currentUser?
(<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>)
:
(<Link className='option' to='/signin'>Sign In</Link>)

}
<CartIcon/>
</div>
{ hidden?null:
<CardDropDown/>
}
</div>

);
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({

currentUser,
hidden

});
export default connect (mapStateToProps)(Header); 
