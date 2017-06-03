import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Routes />
        </Container>
      </div>
    );
  }
}

export default App;
