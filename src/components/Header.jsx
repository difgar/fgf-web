import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logo.png';

const Header = () => (
  <header className='header'>
    <img className='header--img' src={logo} width='200px' alt='' />
    <menu className='header__menu'>
      <div className='header__menu__item'>Registros</div>
      <div className='header__menu__item'>Prestamos</div>
      <div className='header__menu__item'>Cuentas</div>
      <div className='header__menu__item'>Usuarios</div>
      <div className='header__menu__item'>Configuraciones</div>
    </menu>
  </header>
);

export default Header;
