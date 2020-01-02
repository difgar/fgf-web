import React from 'react';
import '../assets/styles/Login.scss';

const Login = (props) => {

  const handleSumit = () => {
    props.history.push('/');
  };

  return (
    <div className='login'>
      <form onSubmit={handleSumit}>
        <input />
        <input />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
