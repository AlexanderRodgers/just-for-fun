import NavBar from './Navbar';

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

export default Layout;