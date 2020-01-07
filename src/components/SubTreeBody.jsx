import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../assets/styles/components/SubTreeBody.scss';
import { updateNav, updateDetail } from '../actions';
import getParent, { navBar } from '../moduls/jsonUtil';

const SubTreeBody = (props) => {

  const { data, show, wrapper, allCuentas } = props;
  const [selectedItemIdx, setSelectedItemIdx] = useState(-1);
  if (data !== undefined) {
    data.filter((item) => item != null).forEach((item) => {
      item.data = item.cuentas; // eslint-disable-line no-param-reassign
    });
  }

  const handleUpdateNav = (item) => {
    navBar.splice(0, navBar.length);
    getParent(allCuentas, item);
    props.updateNav([{ 'nombre': 'Cuentas', 'id': 0 }, ...navBar.reverse()]);
    navBar.splice(0, navBar.length);
  };

  const handleUpdateDetail = (item) => {
    const movimientos = item.cuentas ? item.cuentas.map((cuenta) => {
      return { ...cuenta };
    }) : item.movimientos;

    props.updateDetail({ ...item, movimientos, titulo: item.nombre, summary: item.cuentas !== undefined });
  };

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
                handleUpdateNav(item);
                handleUpdateDetail(item);
                item.data !== undefined && (index !== selectedItemIdx ? setSelectedItemIdx(index) : setSelectedItemIdx(-1)) ;
              }}
              role='button'
              tabIndex='0'
            >
              {`${item.data !== undefined ? (index === selectedItemIdx ? '-' : '+') : '·'} ${item.nombre}`}
            </div>
            <SubTreeBody {...props} {...item} show={index === selectedItemIdx} key={item.nombre} />
          </li>
        )))}
      </ul>
    )
  );
};

SubTreeBody.propTypes = {
  tabs: propTypes.array,
  show: propTypes.bool,
  wrapper: propTypes.bool,
  allCuentas: propTypes.array,
};

const mapDispatchToProps = {
  updateNav,
  updateDetail,
};

export default connect(null, mapDispatchToProps)(SubTreeBody);
