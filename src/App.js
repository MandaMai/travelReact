import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import Info from './components/info/Info'
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div id="parent">
        <Navigation />
        <Hero />
        <Grid>
          <Row>
            <Card name="Italy" imgUrl="http://www.jive.nl/jivewiki/lib/exe/fetch.php?cache=&media=expres:flag-it.png" url="http://www.google.com"/>
            <Card name="England" imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg" url="http://www.google.com"/>
            <Card name="Scotland" imgUrl="https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_Scotland_%28navy_blue%2C_3-2%29.svg" url="http://www.google.com"/>
            <Card name="Ireland" imgUrl="https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Ireland_%283-2%29.svg" url="http://www.google.com"/>
          </Row>
        </Grid>

        <div id="infoTable">
        <Table responsive striped hover>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population</th>
            <th>National Bird</th>
          </tr>
        </thead>
        <tbody>
        <Info name="Italy" capital="Rome" language="English" population="42" bird ="sparrow"/>
        <Info name="England" capital="London" language="English" population="42" bird ="sparrow"/>
        <Info name="Scotland" capital="Glasgow" language="Scottish" population="42" bird ="sparrow"/>
        <Info name="Ireland" capital="Dublin" language="Irish" population="42" bird ="sparrow"/>
        </tbody>
      </Table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
