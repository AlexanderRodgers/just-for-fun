import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { ADD_USER } from '../api/queries';
import { Mutation } from '@apollo/react-components';

const LoginCard = styled(Card)`
width: 50%;
margin: auto;
`;

const SignUpTextField = styled(TextField)`
width: 100%
`;

const formSpacing = {
  margin: '0 10px 0 10px'
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '', password: '', submitDisabled: true };
  }

  handleChange = (stateProp, event) => {
    this.setState({ [stateProp]: event.target.value }, () => {
      // Callback function
      this.isDisabled();
    });
  }

  submitForm = () => {
    console.log('submitting.');
  }

  isDisabled = () => {
    if (!!this.state.email && !!this.state.firstName && !!this.state.lastName && !!this.state.password) {
      this.setState({ submitDisabled: false });
      return;
    }
    this.setState({ submitDisabled: true });
  }

  returnToHome = () => {
    this.props.signUp();
  }

  render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(createUser) => (
          <LoginCard>
            <form>
              <CardContent>
                <Typography styles={{ fontSize: 14, textAlign: 'center' }} variant="h5">Log In</Typography>
              </CardContent>
              <div style={formSpacing}>
                <SignUpTextField
                  id="first-name"
                  label="First Name"
                  margin="normal"
                  onChange={(event) => this.handleChange('firstName', event)}
                  variant="outlined"
                  required
                />
              </div>
              <div style={formSpacing}>
                <SignUpTextField
                  id="last-name"
                  label="Last Name"
                  margin="normal"
                  onChange={(event) => this.handleChange('lastName', event)}
                  variant="outlined"
                  required
                />
              </div>
              <div style={formSpacing}>
                <SignUpTextField
                  id="email"
                  label="Email"
                  onChange={(event) => this.handleChange('email', event)}
                  margin="normal"
                  variant="outlined"
                  required
                />
              </div>
              <div style={formSpacing}>
                <SignUpTextField
                  id="password-input"
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
              <Button variant="outlined" color="primary" onClick={() => {
                this.submitForm();
                createUser({
                  variables: {
                    userInput: { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password }
                  }
                })
                  .then(res => {
                    console.log(res);
                    this.returnToHome();
                  })
                  .catch(e => console.log(e));
              }}
                style={{ margin: "0 10px 10px 10px", float: 'right' }} disabled={this.state.submitDisabled}>Submit</Button>
              <Button variant="outlined" color="primary" onClick={() => this.returnToHome()}
                style={{ margin: "0 10px 10px 10px", float: 'right' }}>Back</Button>
            </form>
          </LoginCard>
        )}
      </Mutation>
    )
  }
}

export default SignUp;