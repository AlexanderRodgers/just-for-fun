import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Login from './Login';
import SignUp from './SignUp';


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
font-size: 1.7em;
text-align: center;
`;

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {toLogin: false, toSignUp: false};
   }
   render() {
      return (
         <Main> {
            !this.state.toLogin && !this.state.toSignUp &&
            <TextContainer>
               <MainText>Screen tenants, or find roomates all within seconds.</MainText>
               <Button variant="contained" color="primary" onClick={ () => this.setState({toLogin: true}) }>
                  Login
               </Button>
               <Button variant="contained" color="primary" onClick={ () => this.setState({toSignUp: true})}>Sign Up</Button>
            </TextContainer>  
         }
            {this.state.toLogin && <Login/>}
            {this.state.toSignUp && <SignUp/>}
         </Main>
      );
   }
}

export default Home; 