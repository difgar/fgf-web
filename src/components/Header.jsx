import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logo.png';

const Header = () => {

  return (
    <header className='header'>
      <img className='header--img' src={logo} width='200px' alt='' />
      <menu className='header__menu'>
        <div className='header__menu__item'>
          <Link to='/'>
            Registros
          </Link>
        </div>
        <div className='header__menu__item'>
          <Link to='/'>
            Prestamos
          </Link>
        </div>
        <div className='header__menu__item'>
          <Link to='/'>
            Cuentas
          </Link>
        </div>
        <div className='header__menu__item'>
          <Link to='/'>
            Usuarios
          </Link>
        </div>
        <div className='header__menu__item'>
          <Link to='/login'>
            Configuraciones
          </Link>
        </div>
      </menu>
    </header>
  );
};

export default Header;
