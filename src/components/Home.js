import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Login from './Login';
import SignUp from './SignUp.js';
import { connect } from 'react-redux';
import { toSignUp, toLogin, toHome } from '../redux/actions';

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
  }

  goHome = () => {
    this.props.toHome();
  }

  handlePageView = (stateChange) => {
    switch (stateChange) {
      case 'login':
        this.props.toLogin();
        break;
      case 'signUp':
        this.props.toSignUp();
        break;
      case 'home':
        this.props.toHome();
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <Main> {
        !this.props.login && !this.props.signUp &&
        <TextContainer>
          <MainText>Screen tenants, or find roomates all within seconds.</MainText>
          <Button variant="contained" color="primary" onClick={() => this.handlePageView('login')}>
            Login
               </Button>
          <Button variant="contained" color="primary" onClick={() => this.handlePageView('signUp')}>Sign Up</Button>
        </TextContainer>
      }
        {this.props.login && <Login login={this.goHome} />}
        {this.props.signUp && <SignUp signUp={this.goHome} />}
      </Main >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.registration.toHome,
    login: state.registration.toLogin,
    signUp: state.registration.toSignUp
  };
};

export default connect(mapStateToProps, { toHome, toSignUp, toLogin })(Home);