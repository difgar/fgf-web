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

const Home = ({ socios, sociedades, terceros, allCuentas, cuentasVigentes, cuentasCanceladas, nav, detail, period }) => {
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
      <Navegation nav={nav} allCuentas={allCuentas} period={period} />
      <Main>
        <Tree>
          <SubTree {...tabPersonas} allCuentas={allCuentas} />
          <SubTree {...tabCuentas} allCuentas={allCuentas} />
        </Tree>
        <Detail detail={detail} allCuentas={allCuentas} />
      </Main>
      <Footer />
    </div>
  );
};

function searchCuenta(cuenta, esVigente) {

  if (cuenta.cuentas !== undefined) {
    const cuentas = cuenta.cuentas.map((item) => {
      return searchCuenta(item, esVigente);
    });
    return { ...cuenta, cuentas: cuentas.filter((item) => item != null) };
  }

  if (esVigente && new Date() <= Date.parse(cuenta.vigencia)) {
    return { ...cuenta };
  }

  if (!esVigente && new Date() > Date.parse(cuenta.vigencia)) {
    return { ...cuenta };;
  }

  return null;
}

const mapStateToProps = (state) => {
  const cuentasVigentes = state.cuentas.map((cuenta) => {
    return searchCuenta(cuenta, true);
  });

  const cuentasCanceladas = state.cuentas.map((cuenta) => {
    return searchCuenta(cuenta, false);
  });

  const detail = { ...state.detail };
  if (!detail.movimientos) {
    const movimientos = state.cuentas.map((cuenta) => {
      return { ...cuenta };
    });
    detail.movimientos = movimientos;
  }

  return {
    nav: state.nav,
    socios: state.socios,
    sociedades: state.sociedades,
    terceros: state.terceros,
    allCuentas: state.cuentas,
    cuentasVigentes,
    cuentasCanceladas,
    detail,
    period: state.period,
  };
};

export default connect(mapStateToProps, null)(Home);
