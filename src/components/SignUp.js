import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { CardContent } from '@material-ui/core';

const LoginCard = styled(Card)`
width: 50%;
margin: auto;
height: 50%;
`;


class SignUp extends Component {
   constructor(props) {
      super(props);
   }
   handleChange = (stateProp, event) => {
      this.setState({[stateProp]: event.target.value});
   }
   render() {
      return (
         <LoginCard>
            <form>
               <div>
               <TextField
                  id="outlined-basic"
                  label="Outlined"
                  margin="normal"
                  variant="outlined"
               />
               </div>
            </form>   
         </LoginCard>
      )
   }
}

export default SignUp;