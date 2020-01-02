import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, hasMenu }) => (
  <div className='App'>
    <Header hasMenu={hasMenu} />
    {children}
    <Footer />
  </div>
);

export default Layout;
