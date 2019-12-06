import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/DetailModal.scss';
import close from '../assets/statics/closeModal.png';

const DetailModal = (props) => {

  const nodo = (
    <div className='detail__modal'>
      <div className='detail__modal__wrapper'>
        <div className='detail__modal__wrapper__title'>
          <div />
            My Modal
          <img className='detail__modal__wrapper__title--img' width='20px' src={close} alt='' onClick={props.onClose} />
        </div>
        <div className='detail__modal__wrapper__body'>
            My Content
        </div>
      </div>
    </div>
  );

  return (
    ReactDOM.createPortal(nodo, document.getElementById('appModal'))
  );
};

export default DetailModal;
