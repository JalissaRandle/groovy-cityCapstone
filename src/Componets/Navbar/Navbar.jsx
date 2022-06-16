import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import {  Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';



import useStyles from './NavBarElements';



const Navbar = () => {
 return(
   <div>
    <Nav>
      <NavLink to='/' >
        <h1>Groovy City</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/artist">
          Artists
        </NavLink>
        <NavLink to="/products">
          Tickets / Merch
        </NavLink>
        <NavLink to="/sign-up">
          Sign-up
        </NavLink>
          <NavLink to="/cart">
            <ShoppingCart />
          </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/login'>Log in</NavBtnLink>
      </NavBtn>
    </Nav>
   </div>
 )
  
}

export default Navbar;