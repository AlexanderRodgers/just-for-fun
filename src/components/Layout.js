import NavBar from './Navbar';
import { connect } from 'react-redux';
import rootContext from '../contexts/rootContext';

const layoutStyle = {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
}

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default connect(null, null, null, { context: rootContext })(Layout);