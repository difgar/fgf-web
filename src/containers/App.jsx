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

const API_SOCIOS = 'http://localhost:3000/socios';
const API_SOCIEDADES = 'http://localhost:3000/sociedades';
const API_TERCEROS = 'http://localhost:3000/terceros';
const API_CUENTAS_VIGENTES = 'http://localhost:3000/cuentasVigentes';
const API_CUENTAS_CANCELADAS = 'http://localhost:3000/cuentasCanceladas';

const App = () => {
  const initialStateSocios = useInitialState(API_SOCIOS);
  const initialStateSociedades = useInitialState(API_SOCIEDADES);
  const initialStateTerceros = useInitialState(API_TERCEROS);
  const initialStateCuentasVigentes = useInitialState(API_CUENTAS_VIGENTES);
  const initialStateCuentasCanceladas = useInitialState(API_CUENTAS_CANCELADAS);

  const tabPersonas = {
    tabs: [{
      titulo: 'Socios',
      active: true,
      data: initialStateSocios,
    },
    {
      titulo: 'Sociedades',
      active: false,
      data: initialStateSociedades,
    },
    {
      titulo: 'Terceros',
      active: false,
      data: initialStateTerceros,
    },
    ] };

  const tabCuentas = {
    tabs: [
      {
        titulo: 'Cuentas Vigentes',
        active: true,
        data: initialStateCuentasVigentes,
      },
      {
        titulo: 'Cuentas Canceladas',
        active: false,
        data: initialStateCuentasCanceladas,
      },
    ] };

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
