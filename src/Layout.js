import React, { Component } from 'react';
import Navbar from './Navbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;