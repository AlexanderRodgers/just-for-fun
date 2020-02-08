import Router from 'next/router';

export default redirect = (dest, { res, status } = {}) => {
  if (res) {
    res.writeHead(status || 302 { location: dest })
    res.end()
  } else {
    if (dest[0] === '/' && dest[1] !== '/') {
      Router.push('/');
    } else {
      window.location = dest;
    }
  }
}