import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import Navegation from '../components/Navegation';
import Main from '../components/Main';
import '../assets/styles/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (form.email.length > 0) {
      event.preventDefault();
      props.history.push('/home');
      props.loginRequest(form);
    }
  };

  return (
    <div className='app login'>
      <Navegation />
      <Main>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__form__title'>
            Login
          </div>
          <div className='login__form__body'>
            <input name='email' onChange={handleInput} placeholder='username' />
            <input name='password' placeholder='password' />
            <button type='submit'>Entrar</button>
          </div>
        </form>
      </Main>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
