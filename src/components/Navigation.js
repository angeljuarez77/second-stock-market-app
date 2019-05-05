import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav,NavItem } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from '../App';
import Search from './Search';

function Navigation(props){
  return(
    <div>
      <Router>
      <Navbar>
          <NavbarBrand onClick={() => props.changeView("welcome")}><Link to="/">Stock Market Page</Link></NavbarBrand> 
          <Nav>
            <NavItem onClick={() => props.changeView("search")}><Link to="/search/">Search Page</Link></NavItem>
          </Nav>
      </Navbar>
      </Router>
    </div>
  )
}

export default Navigation;