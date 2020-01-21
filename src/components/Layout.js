import NavBar from './Navbar';

const layoutStyle = {
}

const Layout = props => (
  <div style={layoutStyle}>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;