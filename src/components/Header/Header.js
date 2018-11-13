import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap"
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Ate-Ball</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">
                                Login
      </NavItem>
                            <NavItem eventKey={2} href="/signup">
                                Signup
      </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;