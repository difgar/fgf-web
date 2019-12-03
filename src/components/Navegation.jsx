import React from 'react';
import '../assets/styles/components/Navegation.scss';
import expandArrow from '../assets/statics/expandArrow.png';

const Navegation = () => (
  <nav className='navegation'>
    <div className='navegation__account'>
      <pre><a href='/'>Home</a></pre>
      <pre>
        {' '}
/
        {' '}
        <a href='/'>Activos</a>
      </pre>
      <pre>
        {' '}
/
        {' '}
        <a href='/'>Bancos</a>
      </pre>
      <pre>
        {' '}
/
        {' '}
        <a href='/'>Bancolombia</a>
      </pre>
    </div>
    <div className='navegation__period'>
      <div className='navegation__period__current'>
        <p>Periodo: 2018</p>
        <img className='navegation__period__img' src={expandArrow} alt='' />
      </div>
      <div className='navegation__period__list'>
        <p className='navegation__period__list__item'>2019</p>
        <p className='navegation__period__list__item'>2018</p>
        <p className='navegation__period__list__item'>2017</p>
      </div>
    </div>
  </nav>
);

export default Navegation;
