import '../assets/styles/App.scss';
import React from 'react';
import Header from '../components/Header';
import Navegation from '../components/Navegation';
import Main from '../components/Main';
import Tree from '../components/Tree';
import SubTree from '../components/SubTree';
import Detail from '../components/Detail';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/socios';

const App = () => {
  const initialState = useInitialState(API);
  const tabPersonas = {
    titulos: ['Socios', 'Sociedades', 'Terceros'],
    idActivo: 0,
    data: initialState,
  };

  const tabCuentas = {
    titulos: ['Cuentas vigentes', 'Cuentas canceladas'],
    idActivo: 0,
    data: initialState,
  };

  return (
    <div className='app'>
      <Header />
      <Navegation />
      <Main>
        <Tree>
          <SubTree {...tabPersonas} />
          <SubTree {...tabCuentas} />
        </Tree>
        <Detail />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
