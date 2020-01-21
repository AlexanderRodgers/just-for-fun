import NavBar from './Navbar';
import { connect } from 'react-redux';
import { toSignUp, toLogin, toHome } from '../redux/actions';
import { useContext } from 'react';

const layoutStyle = {
  backgroundColor: 'black'
}

const mapStateToProps = (state) => {
  return {
    home: state.registration.toHome,
    login: state.registration.toLogin,
    signUp: state.registration.toSignUp
  };
};

const Layout = props => {
  const myContext = useContext(rootContext);
  return (
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default connect(mapStateToProps, { toHome, toSignUp, toLogin },
  null, { context: myContext })(Layout);