import React from 'react';
import Navegation from '../components/Navegation';
import Main from '../components/Main';
import '../assets/styles/Home.scss';

const Home = () => (
  <div className='app home'>
    <Navegation />
    <Main>Welcome</Main>
  </div>
);

export default Home;
