import React, {Component, Fragment} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";
import "../../css/style.css"
class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className='navbar-brand' href="#home"><img className='nav-logo' src={logo}/></Navbar.Brand>
                   <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                   <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="mr-auto">
                        <NavLink className='nav-link nav-font ' to='/'>Home</NavLink>
                       <NavLink className='nav-link nav-font' to='/courseplan'>Course Plan</NavLink>
                       <NavLink className='nav-link nav-font' to='/freeclass'>Free Class</NavLink>
                        <NavLink className='nav-link nav-font' to='/registration'>Registration</NavLink>

                    </Nav>
                   </Navbar.Collapse>

                </Navbar>

            </Fragment>
        );
    }
}

export default Menu;
