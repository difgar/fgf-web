import React from 'react';
import propTypes from 'prop-types';
import '../assets/styles/components/SubTree.scss';

const SubTree = ({ titulos, idActivo, data }) => {
  return (
    <div className='subTree'>
      <div className='subTree__title'>
        {titulos.map((titulo, index) => {
          let customClassName = 'subTree__title__tab';
          customClassName += (index === idActivo ? ' active' : '');
          return (
            <div className={customClassName} key={titulo}>{titulo}</div>
          );

        })}
      </div>
      <div className='subTree__body'>
        <div className='subTree__body__wrapper'>
          {data.length > 0 && (
            <ul>
              {data.map((socio) => <li key={socio.id}><div className='subTree__body__wrapper__item'>{socio.nombre}</div></li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

SubTree.propTypes = {
  titulos: propTypes.array,
  idActivo: propTypes.number,
  data: propTypes.array,
};

export default SubTree;
