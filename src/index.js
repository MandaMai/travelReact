import React, { Component } from 'react';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Form, FormControl, Navbar, Glyphicon,
    Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
