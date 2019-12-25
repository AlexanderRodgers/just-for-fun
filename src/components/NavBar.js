import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
   root: {
     flexGrow: 1,
   },
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
     flexGrow: 1,
   },
 }));
 

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.classes = useStyles();
  }
   render() {
     return (
        <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.classes.title}>
              <Button style={{color: 'white'}}>Home</Button>
            </Typography>
            <Button color="inherit" onClick={() => this.props.setLogin(true)}>Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
     );
   }
}

export default NavBar;