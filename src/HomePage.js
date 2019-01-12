import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'


class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Container text>
            <Header
              as='h1'
              content='Imagine-a-Company'
              
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
              }}
            />
            <Header
              as='h2'
              content='Do whatever you want when you want to.'
              
              style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
              }}
            />
            <Link to="/login">
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Link>
          </Container>
        </div>



      </div>
    );
  }
}

export default HomePage;