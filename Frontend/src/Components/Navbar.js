import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    //Simple navigation bar created using react-bootstrap for basic css.
    //The routes used are created in the app.js folder with react-router-dom. 
    //Used links inside the Nav.Link because that was what I was familiar with, and knew that it would work.
    return(
        <React.Fragment>
        <Navbar bg="dark" expand='lg' variant='dark'>
            <Container>
            <Navbar.Brand color="white">Student Server</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/addStudent">Add</Link></Nav.Link>
                        <Nav.Link><Link to="/deleteStudent">Delete</Link></Nav.Link>
                        <Nav.Link><Link to="/displayStudent">Display</Link></Nav.Link>
                        <Nav.Link><Link to="/updateStudent">Update</Link></Nav.Link>
                        <Nav.Link><Link to="/listStudent">List</Link></Nav.Link>
                        <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                    </Nav>
        </Navbar.Collapse>
        </Container>    
        </Navbar>
        </React.Fragment>
    )
}

export default Navigation