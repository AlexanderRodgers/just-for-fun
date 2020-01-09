import React, { Component } from 'react';
import Navbar from './src/components/NavBar';
import Home from './src/components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayLogin: false, displaySignUp: false };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
