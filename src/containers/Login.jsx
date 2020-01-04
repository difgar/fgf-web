import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
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
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input name='email' onChange={handleInput} />
        <input name='password' />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
