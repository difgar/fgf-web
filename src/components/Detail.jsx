import React from 'react';
import '../assets/styles/components/Detail.scss';

const Detail = ({ children }) => (
  <section className='detail'>
    <div className='detail__title'>
      <div />
      <div>Bancolombia</div>
      <div>Saldo: 345.000</div>
    </div>
    <div className='detail__body'>
      <div className='detail__body__thead'>
        <table className='detail__body__table'>
          <colgroup>
            <col className='detail__body__table__column--date' />
            <col className='detail__body__table__column--text' />
            <col className='detail__body__table__column--number' />
            <col className='detail__body__table__column--number' />
            <col className='detail__body__table__column--number' />
          </colgroup>
          <thead>
            <tr>
              <th align='center'>Fecha</th>
              <th align='center'>Descripcion</th>
              <th align='center'>Debe</th>
              <th align='center'>Haber</th>
              <th align='center'>Saldo</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className='detail__body__tbody'>
        <table className='detail__body__table'>
          <colgroup>
            <col className='detail__body__table__column--date' />
            <col className='detail__body__table__column--text' />
            <col className='detail__body__table__column--number' />
            <col className='detail__body__table__column--number' />
            <col className='detail__body__table__column--number' />
          </colgroup>
          <tbody>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/14</td>
              <td align='left'>Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre</td>
              <td align='right'>0</td>
              <td align='right'>200.000</td>
              <td align='right'>400.000</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/14</td>
              <td align='left'>Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre, Pago cuota de Octubre</td>
              <td align='right'>0</td>
              <td align='right'>200.000</td>
              <td align='right'>400.000</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
            <tr>
              <td align='center'>2019/10/11</td>
              <td align='left'>Pago cuota de Mayo</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
              <td align='right'>999.999.999.99</td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </div>
    </div>
  </section>
);

export default Detail;
