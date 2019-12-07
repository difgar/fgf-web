import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/DetailModal.scss';
import close from '../assets/statics/closeModal.png';

const DetailModal = (props) => {

  const { transaction } = props;

  const nodo = (
    <div className='detail__modal'>
      <div className='detail__modal__wrapper'>
        <div className='detail__modal__wrapper__title'>
          <div />
          {`Fecha: ${transaction.fecha}`}
          <img className='detail__modal__wrapper__title--img' width='20px' src={close} alt='' onClick={props.onClose} />
        </div>
        <div className='detail__modal__wrapper__body'>
          {transaction.movimientos.map((movimiento) => (
            <table className='detail__modal__body__table' key={movimiento.cuentaId}>
              <caption className='detail__body__table__caption'>{movimiento.cuenta}</caption>
              <colgroup>
                <col className='detail__body__table__column--text' />
                <col className='detail__body__table__column--number' />
                <col className='detail__body__table__column--number' />
              </colgroup>
              <thead>
                <tr>
                  <th align='center'>Descripción</th>
                  <th align='center'>Debe</th>
                  <th align='center'>Haber</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align='left'>{movimiento.descripcion}</td>
                  <td align='right'>{movimiento.debe}</td>
                  <td align='right'>{movimiento.haber}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    ReactDOM.createPortal(nodo, document.getElementById('appModal'))
  );
};

export default DetailModal;
