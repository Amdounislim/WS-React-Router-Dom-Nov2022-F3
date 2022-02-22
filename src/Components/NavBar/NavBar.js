import React from 'react'
import './NavBar.css'
import { Nav, Form, Button, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'

const NavBar = ({ isAuth, login, logout }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div style={{ display: 'flex' }}>
                    <Navbar.Brand >WS-Router</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to='/' className="appLink" activeClassName="activeLink">Home</Link>
                        <Link to='/users' className="appLink" activeClassName="activeLink">users</Link>
                        <Link to='/admin' className="appLink" activeClassName="activeLink">Admin</Link>
                    </Nav>
                </div>
                <Form inline>
                    <Button variant="outline-info" className="loginBtn"
                        onClick={isAuth ? logout : login}
                    >
                       {isAuth ? "LOGOUT" : "LOGIN"}
                    </Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar