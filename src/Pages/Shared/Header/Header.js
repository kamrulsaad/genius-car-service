import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="30" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link> */}
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                        {
                            user && (
                                <div className='d-md-flex'>
                                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                                    <Nav.Link as={Link} to="/addServices">Add Services</Nav.Link>
                                    <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                                </div>
                            )
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <button className='btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign Out</button> : <Nav.Link eventKey={2} as={Link} to="/login">
                                Log In
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;