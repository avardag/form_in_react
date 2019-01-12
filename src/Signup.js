import React, { Component } from 'react';
import {Grid, Header, Message, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';


class Signup extends Component {
  render() {
    return (
      <div className='signin-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.sigin-form {
        height: 90%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%', paddingTop: "30px" }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 850 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Icon name="sign in" /> Sign Up for account
        </Header>

        <FormContainer/>

        <Message>
          New to us? <Link to='/signup'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    );
  }
}

export default Signup;