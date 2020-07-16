import React, {Component, Fragment} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Laravel React</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>

                </Navbar>

            </Fragment>
        );
    }
}

export default Menu;
