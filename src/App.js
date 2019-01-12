import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
