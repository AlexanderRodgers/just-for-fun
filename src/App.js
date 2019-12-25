import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayLogin: false, displaySignUp: false}
  }

  goHome = () => {
    this.setState({displayLogin: false, displaySignUp: false});
  }

  setLogin = (state) => {
    this.setState({displayLogin: state});
  }

  render() {
    return (
      <div>
        <Navbar setLogin={this.setLogin}/>
        <Home/>
      </div>
    );
  }
}

export default App;
