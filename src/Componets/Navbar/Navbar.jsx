import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import {  Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';







const Navbar = ({ totalItems }) => {
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
        <IconButton  aria-label='Show cart items' color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <NavLink to="/cart">
                <ShoppingCart />
              </NavLink>
             </Badge>
        </IconButton>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/login'>Log in</NavBtnLink>
      </NavBtn>
    </Nav>
   </div>
 )
  
}

export default Navbar;