import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../assets/styles/components/SubTreeBody.scss';

const SubTreeBody = ({ data, show, wrapper }) => {
  try {
    data.forEach((item) => {
      const [show, setShow] = useState(false);
      item.show = show; // eslint-disable-line no-param-reassign
      item.setShow = setShow; // eslint-disable-line no-param-reassign
      item.data = item.cuentas; // eslint-disable-line no-param-reassign
    });
  } catch (Error) {
  }

  return (
    show && data !== undefined && (
      <ul className={wrapper ? 'subTree__body__wrapper' : ''}>
        {data.length > 0 && (data.map((item) => (
          <li key={item.id}>
            <div className='subTree__body__wrapper__item' onClick={() => { item.data !== undefined && item.setShow(!item.show) ; }} onDoubleClick={() => { alert(`Actualizar Detalle:${item.nombre}`) ; item.data !== undefined && item.setShow(!item.show) ; }} role='button' tabIndex='0'>
              {`${item.data !== undefined ? (item.show ? '-' : '+') : '·'} ${item.nombre}`}
            </div>
            <SubTreeBody {...item} key={item.nombre} />
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
