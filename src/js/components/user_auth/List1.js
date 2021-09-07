import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import User from './User';
import { Redirect, Link  } from 'react-router-dom';

export default class List1 extends Component {
  render() {
    return (
      <Container className="center">Hello Login app list1<br/>
        <button>
          <Link to='/logout'>ログアウト</Link>
        </button>
      </Container>
    );
  }
}