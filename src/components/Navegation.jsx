import React, { useState } from 'react';
import '../assets/styles/components/Navegation.scss';
import expandArrow from '../assets/statics/expandArrow.png';

const Navegation = () => {

  const [selectedYear, setSelectedYear] = useState(2019);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years = [];
  for (let year = currentYear; year >= 2010; year--) {
    years.push(year);
  }

  return (
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
                console.log(document.getElementsByClassName('navegation__period')[0].classList);
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

export default Navegation;
