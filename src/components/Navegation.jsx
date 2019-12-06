import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateNav, updateDetail } from '../actions';
import '../assets/styles/components/Navegation.scss';
import expandArrow from '../assets/statics/expandArrow.png';
import getParent, { navBar } from '../moduls/jsonUtil';

const Navegation = (props) => {
  const { nav, allCuentas, period } = props;

  const [selectedYear, setSelectedYear] = useState(period);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years = [];
  for (let year = currentYear; year >= 2010; year--) {
    years.push(year);
  }

  const handleUpdateNav = (item) => {
    navBar.splice(0, navBar.length);
    getParent(allCuentas, item);
    props.updateNav([{ 'nombre': 'home', 'id': 0 }, ...navBar.reverse()]);
    navBar.splice(0, navBar.length);
  };

  const handleUpdateDetail = (item) => {
    const movimientos = item.cuentas ? item.cuentas.map((cuenta) => {
      return { ...cuenta };
    }) : item.movimientos;

    const propDetail = { ...item, movimientos, titulo: item.nombre, summary: item.cuentas !== undefined };
    if (item.id === 0) {
      propDetail.summary = true;
      propDetail.titulo = 'Balance';
      propDetail.saldo = 0.0;
    }
    props.updateDetail(propDetail);
  };

  return (
    <nav className='navegation'>
      <div className='navegation__account'>
        {nav !== undefined && nav.map((path) => (
          <div
            className='navegation__account__item'
            key={path.id}
            onClick={() => {
              handleUpdateNav(path);
              handleUpdateDetail(path);
            }}
            role='button'
            tabIndex='0'
          >
            <pre>{`/ ${path.nombre} `}</pre>
          </div>
        ))}
      </div>
      <div className='navegation__period'>
        <div
          className='navegation__period__current'
          onClick={() => { document.getElementsByClassName('navegation__period')[0].classList.add('active') ; }}
          role='button'
          tabIndex='0'
        >
          <p>{`Periodo: ${selectedYear}`}</p>
          <img className='navegation__period__img' src={expandArrow} alt='' />
        </div>
        <div className='navegation__period__list'>
          {years.map((year) => (
            <p
              className='navegation__period__list__item'
              key={year}
              onClick={() => {
                setSelectedYear(year);
                document.getElementsByClassName('navegation__period')[0].classList.remove('active');
              }}
            >
              {year}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navegation.propTypes = {
  nav: propTypes.array,
  allCuentas: propTypes.array,
};

const mapDispatchToProps = {
  updateNav,
  updateDetail,
};

export default connect(null, mapDispatchToProps)(Navegation);
