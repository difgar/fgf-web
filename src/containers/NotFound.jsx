import React from 'react';
import Navegation from '../components/Navegation';
import Main from '../components/Main';
import '../assets/styles/NotFound.scss';

const NotFound = () => (
  <div className='app notfound'>
    <Navegation />
    <Main>Page not found</Main>
  </div>
);

export default NotFound;
