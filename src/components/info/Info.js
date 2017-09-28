import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.capital}</td>
        <td>{this.props.language}</td>
        <td>{this.props.population}</td>
        <td>{this.props.bird}</td>
    </tr>
    );
  }
}

export default Info;