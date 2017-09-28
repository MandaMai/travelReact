import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import './Card.css';


export default class Card extends Component {
    render() {
        return (
            <Col xs={3} md={3} id="cards">
              <Thumbnail src={this.props.imgUrl} alt="242x200">
                <h3>{this.props.name}</h3>
                <div class="details">
                <a href="{this.props.imgUrl}">{this.props.name} Tourism Site</a>
                </div>
              </Thumbnail>
            </Col>
        );
      }


}
