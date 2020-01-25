import NavBar from './Navbar';
import { connect } from 'react-redux';
import { toSignUp, toLogin, toHome } from '../redux/actions';
import rootContext from '../contexts/rootContext';

const layoutStyle = {
  background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
}

const mapStateToProps = (state) => {
  return {
    home: state.registration.toHome,
    login: state.registration.toLogin,
    signUp: state.registration.toSignUp
  };
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default connect(mapStateToProps,
  { toHome, toSignUp, toLogin },
  null,
  { context: rootContext })(Layout);