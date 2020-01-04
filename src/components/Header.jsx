import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logo.png';

const Header = (props) => {

  const { user } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = (event) => {
    props.history.push('/login');
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/home'>
        <img className='header--img' src={logo} width='200px' alt='' />
      </Link>
      { hasUser && (
        <div className='header__session'>
          <a className='header__session--clouse' href='/' onClick={handleLogout}>Cerrar Sesión</a>
          <menu className='header__menu'>
            <Link to='/registros'>
              <div className='header__menu__item'>
                Registros
              </div>
            </Link>
            <Link to='/prestamos'>
              <div className='header__menu__item'>
                Prestamos
              </div>
            </Link>
            <Link to='/cuentas'>
              <div className='header__menu__item'>
                Cuentas
              </div>
            </Link>
            <Link to='/usuarios'>
              <div className='header__menu__item'>
                Usuarios
              </div>
            </Link>
            <Link to='/configuraciones'>
              <div className='header__menu__item'>
                Configuraciones
              </div>
            </Link>
          </menu>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
