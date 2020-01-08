import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
