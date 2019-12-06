import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateNav, updateDetail } from '../actions';
import '../assets/styles/components/Detail.scss';
import getParent, { navBar } from '../moduls/jsonUtil';
import DetailModal from './DetailModal';

const Detail = (props) => {

  const { detail, allCuentas } = props;
  const [transactionId, setTransactionId] = useState(null);

  const handleUpdateNav = (item) => {
    navBar.splice(0, navBar.length);
    getParent(allCuentas, item);
    props.updateNav([{ 'nombre': 'home', 'id': 0 }, ...navBar.reverse()]);
    navBar.splice(0, navBar.length);
  };

  const handleUpdateDetail = (item) => {
    const movimientos = item.cuentas ? item.cuentas.map((cuenta) => {
      return { ...cuenta };
    }) : item.movimientos;

    props.updateDetail({ ...item, movimientos, titulo: item.nombre, summary: item.cuentas !== undefined });
  };

  return (
    <section className='detail'>
      <div className='detail__title'>
        <div />
        <div>{detail.titulo}</div>
        <div>{`Saldo: ${detail.saldo}`}</div>
      </div>
      <div className='detail__body'>
        <div className='detail__body__thead'>
          <table className='detail__body__table'>
            <colgroup>
              {!detail.summary && <col className='detail__body__table__column--date' />}
              <col className='detail__body__table__column--text' />
              {!detail.summary && <col className='detail__body__table__column--number' />}
              {!detail.summary && <col className='detail__body__table__column--number' />}
              <col className='detail__body__table__column--number' />
            </colgroup>
            <thead>
              <tr>
                {!detail.summary && <th align='center'>Fecha</th>}
                <th align='center'>{`${!detail.summary ? 'Descripción' : 'Cuenta'}`}</th>
                {!detail.summary && <th align='center'>Debe</th>}
                {!detail.summary && <th align='center'>Haber</th>}
                <th align='center'>Saldo</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='detail__body__tbody'>
          <table className='detail__body__table'>
            <colgroup>
              {!detail.summary && <col className='detail__body__table__column--date' />}
              <col className='detail__body__table__column--text' />
              {!detail.summary && <col className='detail__body__table__column--number' />}
              {!detail.summary && <col className='detail__body__table__column--number' />}
              <col className='detail__body__table__column--number' />
            </colgroup>
            <tbody>
              {detail.movimientos.map((cuenta) => (
                <tr
                  key={cuenta.transactionId ? cuenta.transactionId : cuenta.id}
                  onDoubleClick={() => {
                    if (detail.summary) {
                      handleUpdateNav(cuenta);
                      handleUpdateDetail(cuenta);
                    } else {
                      setTransactionId(cuenta.transactionId);
                    }
                  }}
                >
                  {!detail.summary && <td align='center'>{cuenta.fecha}</td>}
                  <td align='left'>{cuenta.nombre || cuenta.descripcion}</td>
                  {!detail.summary && <td align='right'>{cuenta.debe}</td>}
                  {!detail.summary && <td align='right'>{cuenta.haber}</td>}
                  <td align='right'>{cuenta.saldo}</td>
                </tr>
              ))}
            </tbody>
            <tfoot />
          </table>
        </div>
      </div>
      {transactionId && <DetailModal transactionId={transactionId} onClose={() => setTransactionId(null)} />}
    </section>
  );
};

Detail.propTypes = {
  detail: propTypes.object,
  allCuentas: propTypes.array,
};

const mapDispatchToProps = {
  updateNav,
  updateDetail,
};

export default connect(null, mapDispatchToProps)(Detail);
