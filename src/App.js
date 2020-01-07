import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';

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
