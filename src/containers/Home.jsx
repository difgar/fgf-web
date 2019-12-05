import '../assets/styles/Home.scss';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Navegation from '../components/Navegation';
import Main from '../components/Main';
import Tree from '../components/Tree';
import SubTree from '../components/SubTree';
import Detail from '../components/Detail';
import Footer from '../components/Footer';

const Home = ({ socios, sociedades, terceros, cuentasVigentes, cuentasCanceladas }) => {
  const tabPersonas = {
    tabs: [{
      titulo: 'Socios',
      active: true,
      data: socios,
    },
    {
      titulo: 'Sociedades',
      active: false,
      data: sociedades,
    },
    {
      titulo: 'Terceros',
      active: false,
      data: terceros,
    },
    ] };

  const tabCuentas = {
    tabs: [
      {
        titulo: 'Cuentas Vigentes',
        active: true,
        data: cuentasVigentes,
      },
      {
        titulo: 'Cuentas Canceladas',
        active: false,
        data: cuentasCanceladas,
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

const mapStateToProps = (state) => {
  return {
    socios: state.socios,
    sociedades: state.sociedades,
    terceros: state.terceros,
    cuentasVigentes: state.cuentasVigentes,
    cuentasCanceladas: state.cuentasCanceladas,
  };
};

export default connect(mapStateToProps, null)(Home);
