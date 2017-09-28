import React, { Component } from 'react';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';
import './Footer.css';


export default class Footer extends Component {
    render() {
        return (
          <div className="Navigation__container">
            <Navbar inverse fixedBottom>
              <Navbar.Header>
                <Navbar.Brand href="http://www.google.com">&copy;Travel is Fun!</Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight class="pullRight-footer">
                  <NavItem href="http://www.google.com">
                    Facebook
                  </NavItem>
                  <NavItem href="http://www.google.com">
                    Twitter
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>
        );
      }


}
