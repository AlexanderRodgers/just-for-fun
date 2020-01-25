import NavBar from './Navbar';
import rootContext from '../../rootContext';

const layoutStyle = {
  background: '-webkit - linear - gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */',
  background: 'linear - gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */'
}

const Layout = props => {
  console.log(rootContext);
  return (
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default Layout;