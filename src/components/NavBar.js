import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'next/router';
import Router from 'next/router';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // Need to update so that the correct state actually loads.
  routeUser = (userState) => {
    this.props.handleUserState(userState);
    Router.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Button style={{ color: 'white' }} onClick={() => this.props.handleUserState('toHome')}>Home</Button>
            </Typography>
            <Button color="inherit" onClick={() => this.routeUser('toLogin')}>Login</Button>
            <Button color="inherit" onClick={() => this.props.handleUserState('toSignUp')}>Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(useStyles)(NavBar));
