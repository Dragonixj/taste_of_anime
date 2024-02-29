import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './styles/navbar.css'


const NavBar = () => {
    return (
        <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">TOA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="intro">Intro</Nav.Link>
                        <Nav.Link href="#spotlight">Spotlight</Nav.Link>
                        <Nav.Link href="#recipe">Recipes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default NavBar;
