import React, { Component } from 'react';
import {Container , Col , Row} from 'react-bootstrap';

import Sidebar from '../GeneralPageCredentials/Sidebar';
import MainArea from '../GeneralPageCredentials/MainArea';

class GeneralPage extends Component {
  constructor(props){
    super(props);
    this.style = {
      marginTop : "96px" ,
      paddingRight : "0px"
    }
  }
  render() {
    return (
          <Container fluid={true} style={this.style}>
              <Row>
                <Col lg={10}><MainArea /></Col>
                <Col lg={2}><Sidebar /></Col>
              </Row>
          </Container>
    )
  }
}

export default GeneralPage;