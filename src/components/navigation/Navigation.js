import React, { Component } from 'react';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';
import './Navigation.css';


export default class Navigation extends Component {
    render() {
        return (
          <div className="Navigation__container">
            <Navbar inverse fixedTop>
              <Navbar.Header>
                <Navbar.Brand href="http://www.google.com">My Travel Site</Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight class="pullRight-header">
                  <NavItem href="http://www.google.com">
                    Home
                  </NavItem>
                  <NavItem href="http://www.google.com">
                    About
                  </NavItem>
                  <NavItem href="http://www.google.com">
                    Stuff
                  </NavItem>
                  <NavItem href="http://www.google.com">
                    Contact
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>
        );
      }


}
