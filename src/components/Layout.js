import React, { useState } from 'react';
import NavBar from './Navbar';
import SideBar from './SideBar';

const layoutStyle = {
  height: '100%',
  width: '100%',
  background: '-webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */',
  background: 'linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */'
}

// Need to figure out how to redirect to homepage when someone clicks something from the navbar and they're not at home

const Layout = props => {
  const [userState, updateUserState] = useState({ toLogin: false, toSignUp: false, toHome: true });
  const handleUserState = (state) => {
    let newUserState = {};
    Object.keys(userState).forEach(stateProp => {
      if (stateProp !== state && userState[stateProp] === true) {
        newUserState[stateProp] = false;
      } else if (stateProp === state) {
        newUserState[stateProp] = true;
      }
    });
    updateUserState({ ...userState, ...newUserState });
  }
  return (
    <div style={layoutStyle}>
      <div>
        <SideBar />
      </div>
      {React.Children.map(props.children, child => {
        if (child.type.name === 'Home') {
          return React.cloneElement(props.children, { userState, handleUserState });
        } else {
          return child;
        }
      })}
    </div>
  );
}

export default Layout;
