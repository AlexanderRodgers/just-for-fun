import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Login from './Login';
import SignUp from './SignUp.js';

const Main = styled.div`
display: flex;
margin: auto;
width: 100%;
height: 100vh;
background: #2193b0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const TextContainer = styled.section`
height: 200px;
width: 70%;
margin: auto;
`

const MainText = styled.h1`
color: white;
margin: auto auto 15px auto;
font-size: 3em;
text-align: center;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      toSignUp: false,
      toHome: true
    };
    this.userState = this.props.userState;
  }

  goHome = () => {
    this.props.handleUserState();
  }

  submitForm = () => {
    this.setState({ isLoggedIn: true });
    Router.push('/dashboard');
  }

  componentDidUpdate(previousProps) {
    if (previousProps.data !== this.props.data) {
      this.setState({ userState: { ...this.props.data.userState } })
    }
  }

  render() {
    return (
      <Main> {
        !this.props.userState.toLogin && !this.props.userState.toSignUp &&
        <TextContainer>
          <MainText>What is the purpose of this website?</MainText>
          <Button variant="contained" color="primary" onClick={() => this.props.handleUserState('toLogin')}>
            Login
               </Button>
          <Button variant="contained" color="primary" onClick={() => this.props.handleUserState('toSignUp')}>Sign Up</Button>
        </TextContainer>
      }
        {this.props.userState.toLogin && <Login login={this.goHome} submit={this.submitForm} />}
        {this.props.userState.toSignUp && <SignUp signUp={this.goHome} />}
      </Main >
    );
  }
}

export default Home;