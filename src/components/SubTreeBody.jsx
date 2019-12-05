import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../assets/styles/components/SubTreeBody.scss';

const SubTreeBody = ({ data, show, wrapper }) => {

  const [selectedItemIdx, setSelectedItemIdx] = useState(-1);
  if (data !== undefined) {
    data.forEach((item) => {
      item.data = item.cuentas; // eslint-disable-line no-param-reassign
    });
  }

  return (
    show && data !== undefined && (
      <ul className={wrapper ? 'subTree__body__wrapper' : ''}>
        {data.length > 0 && (data.map((item, index) => (
          <li key={item.id}>
            <div
              className='subTree__body__wrapper__item'
              onClick={() => {
                item.data !== undefined && (index !== selectedItemIdx ? setSelectedItemIdx(index) : setSelectedItemIdx(-1)) ;
              }}
              onDoubleClick={() => {
                alert(`Actualizar Detalle:${item.nombre}`) ;
                item.data !== undefined && (index !== selectedItemIdx ? setSelectedItemIdx(index) : setSelectedItemIdx(-1)) ;
              }}
              role='button'
              tabIndex='0'
            >
              {`${item.data !== undefined ? (index === selectedItemIdx ? '-' : '+') : '·'} ${item.nombre}`}
            </div>
            <SubTreeBody {...item} show={index === selectedItemIdx} key={item.nombre} />
          </li>
        )))}
      </ul>
    )
  );
};

SubTreeBody.propTypes = {
  tabs: propTypes.array,
  show: propTypes.bool,
};

export default SubTreeBody;
