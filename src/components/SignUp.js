import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const LoginCard = styled(Card)`
width: 50%;
margin: auto;
height: 50%;
`;

const SignUpTextField = styled(TextField)`
width: 100%
margin: 0 10px 0 10px;
`;

const formSpacing = {
   margin: '0 10px 0 10px'
};

class SignUp extends Component {
   constructor(props) {
      super(props);
      this.state = { firstName: '', lastName: '', email: '', password: '', submitDisabled: true};
   }

   handleChange = (stateProp, event) => {
      this.setState({[stateProp]: event.target.value}, () => {
         // Callback function
         this.isDisabled();
      });
   }

   submitForm = () => {
      console.log('submitting.');
   }

   isDisabled = () => {
      if (!!this.state.email && !!this.state.firstName && !!this.state.lastName && !!this.state.password) {
         this.setState({submitDisabled: false});
         return;
      }
      this.setState({submitDisabled: true});
   }

   render() {
      return (
         <LoginCard>
            <form>
               <div style={formSpacing}>
                  <SignUpTextField
                     id="outlined-basic"
                     label="First Name"
                     margin="normal"
                     onChange={(event) => this.handleChange('firstName', event)}
                     variant="outlined"
                     required
                  />
               </div>
               <div style={formSpacing}>
                  <SignUpTextField
                     id="outlined-basic"
                     label="Last Name"
                     margin="normal"
                     onChange={(event) => this.handleChange('lastName', event)}
                     variant="outlined"
                     required
                  />
               </div>
               <div style={formSpacing}>
                  <SignUpTextField
                     id="outlined-basic"
                     label="Email"
                     onChange={(event) => this.handleChange('email', event)}
                     margin="normal"
                     variant="outlined"
                     required
                  />
               </div>
               <div style={formSpacing}>
                  <SignUpTextField
                     id="outlined-password-input"
                     label="Password"
                     value={this.state.password}
                     onChange={(event) => this.handleChange('password', event)}
                     type="password"
                     autoComplete="current-password"
                     margin="normal"
                     variant="outlined"
                     required
                  />
               </div>
               <Button variant="outlined" color="primary" onClick={() => this.submitForm()}
               style={{margin: "0 10px 0 10px", float: 'right'}} disabled={this.state.submitDisabled}>Submit</Button>
            </form>
         </LoginCard>
      )
   }
}

export default SignUp;