import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';

const LoginCard = styled(Card)`
width: 50%;
margin: auto;
`;

const LoginTextField = styled(TextField)`
width: 100%
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginText: '', passwordText: '' };
  }

  handleChange = (stateProp, event) => {
    this.setState({ [stateProp]: event.target.value });
  }

  returnToHome = () => {
    this.props.login();
  }
  render() {
    return (
      <LoginCard>
        <CardContent>
          <Typography styles={{ fontSize: 14, textAlign: 'center' }} variant="h5">Log In</Typography>
        </CardContent>
        <div style={{ margin: '0 10px 0 10px' }}>
          <LoginTextField
            id="username"
            label="Username"
            value={this.state.loginText}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div style={{ margin: '0 10px 0 10px' }}>
          <LoginTextField
            id="password"
            label="Password"
            value={this.state.passwordText}
            onChange={(event) => this.handleChange('passwordText', event)}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <Button variant="contained" color="primary" style={{ margin: "0 10px 0 10px", float: 'right' }}>
            Submit
               </Button>
          <Button variant="outlined" color="primary" onClick={() => this.returnToHome()}
            style={{ margin: "0 10px 10px 10px", float: 'right' }}>Back</Button>
        </div>
      </LoginCard>
    )
  }
}

export default Login;