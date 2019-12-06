/* eslint-disable no-return-assign */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routers/App';

/*const API_SOCIOS = 'http://localhost:3000/socios';
const API_SOCIEDADES = 'http://localhost:3000/sociedades';
const API_TERCEROS = 'http://localhost:3000/terceros';
const API_CUENTAS_VIGENTES = 'http://localhost:3000/cuentasVigentes';
const API_CUENTAS_CANCELADAS = 'http://localhost:3000/cuentasCanceladas';

let initialState = {};

async function callAPI(API) {
  const response = await fetch(API);
  const data = await response.json();
  return data;
};

callAPI(API_SOCIOS).then((socios) => initialState = { ...initialState, socios });
callAPI(API_SOCIEDADES).then((sociedades) => initialState = { ...initialState, sociedades });
callAPI(API_TERCEROS).then((terceros) => initialState = { ...initialState, terceros });
callAPI(API_CUENTAS_VIGENTES).then((cuentasVigentes) => initialState = { ...initialState, cuentasVigentes });
callAPI(API_CUENTAS_CANCELADAS).then((cuentasCanceladas) => initialState = { ...initialState, cuentasCanceladas });
*/
//const initialState = { socios, sociedades, terceros, cuentasVigentes, cuentasCanceladas };

const initialState = {
  'socios': [
    {
      'nombre': 'Diego',
      'id': 123,
      'cuentas': [
        {
          'nombre': 'Capital',
          'id': 987,
        },
        {
          'nombre': 'Prestamos',
          'id': 876,
        },
        {
          'nombre': 'CxC Tags',
          'id': 765,
        },
      ],
    },
    {
      'nombre': 'Angela',
      'id': 234,
      'cuentas': [
        {
          'nombre': 'Capital',
          'id': 654,
        },
        {
          'nombre': 'Intereses',
          'id': 543,
        },
        {
          'nombre': 'Pagos Adelantados',
          'id': 432,
        },
      ],
    },
    {
      'nombre': 'Lina',
      'id': 111,
      'cuentas': [
        {
          'nombre': 'Prestamos',
          'id': 321,
        },
        {
          'nombre': 'Intereses',
          'id': 210,
        },
        {
          'nombre': 'TAG',
          'id': 111,
        },
      ],
    },
  ],
  'sociedades': [
    {
      'nombre': 'Familia Garcia Pava',
      'id': 345,
    },
    {
      'nombre': 'Familia Garcia Cortes',
      'id': 456,
    },
  ],
  'terceros': [
    {
      'nombre': 'Suramericana de Productos Quimicos',
      'id': 567,
    },
    {
      'nombre': 'Diego Alejandro Gonzales',
      'id': 678,
    },
  ],
  'cuentas': [
    {
      'nombre': 'Activos',
      'id': 1,
      'saldo': 15134500,
      'vigencia': '9999-12-31',
      'cuentas': [
        {
          'nombre': 'Bancos',
          'id': 11,
          'saldo': 13134567,
          'vigencia': '9999-12-31',
        },
        {
          'nombre': 'Cuentas x Cobrar',
          'id': 12,
          'saldo': 13134568,
          'vigencia': '9999-12-31',
          'cuentas': [
            {
              'nombre': 'Prestamos',
              'id': 121,
              'saldo': 13134567,
              'vigencia': '9999-12-31',
              'cuentas': [
                {
                  'nombre': 'P1',
                  'id': 1211,
                  'saldo': 13134567,
                  'vigencia': '9999-12-31',
                },
                {
                  'nombre': 'P2',
                  'id': 1212,
                  'saldo': 13134568,
                  'vigencia': '9999-12-31',
                },
                {
                  'nombre': 'P3',
                  'id': 1213,
                  'saldo': 13134569,
                  'vigencia': '2017-12-31',
                },
              ],
            },
            {
              'nombre': 'Intereses',
              'id': 12,
              'saldo': 13134568,
              'vigencia': '9999-12-31',
            },
            {
              'nombre': 'GMF',
              'id': 13,
              'saldo': 13134569,
              'vigencia': '9999-12-31',
              'movimientos': [
                {
                  'fecha': '2019-05-13',
                  'descripcion': 'GMF del prestamo de Valeria',
                  'debe': '',
                  'haber': '123.000',
                  'saldo': '123.000',
                  'transactionId': '123456',
                },
                {
                  'fecha': '2019-06-04',
                  'descripcion': 'Abono al GMF del prestamo de Valeria',
                  'debe': '23.000',
                  'haber': '',
                  'saldo': '100.000',
                  'transactionId': '987654',
                },
              ],
            },
          ],
        },
        {
          'nombre': 'Otros',
          'id': 122,
          'saldo': 13134569,
          'vigencia': '9999-12-31',
        },
      ],
    },
    {
      'nombre': 'Pasivos',
      'id': 2,
      'saldo': 14134500,
      'vigencia': '9999-12-31',
      'cuentas': [
        {
          'nombre': 'Capital',
          'id': 21,
          'saldo': 13134500,
          'vigencia': '9999-12-31',
        },
        {
          'nombre': 'Cuentas por Pagar',
          'id': 22,
          'saldo': 13134501,
          'vigencia': '9999-12-31',
        },
        {
          'nombre': 'Otros',
          'id': 23,
          'saldo': 13134502,
          'vigencia': '9999-12-31',
        },
      ],
    },
    {
      'nombre': 'Patrimonio',
      'id': 3,
      'saldo': 17134500,
      'vigencia': '9999-12-31',
      'cuentas': [
        {
          'nombre': 'Inscripciones',
          'id': 31,
          'saldo': 131300009,
          'vigencia': '9999-12-31',
        },
        {
          'nombre': 'Reservas',
          'id': 32,
          'saldo': 131300008,
          'vigencia': '9999-12-31',
        },
      ],
    },
  ],
  'nav': [{ 'nombre': 'home', 'id': 0 }],
  'detail': { titulo: 'Balance', saldo: 0.0, summary: true },
  'period': 2019,
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
