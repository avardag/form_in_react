import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Navbar extends Component {

  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { fixed } = this.state
    return (
      <div>

        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 60, padding: '0.6em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item active>
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Link to="/login">
                      <Button inverted={!fixed}>
                        Log in
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Link>
                  </Menu.Item>
                </Container>
              </Menu>

            </Segment>
          </Visibility>
        </Responsive>

      </div>
    );
  }
}

export default Navbar;