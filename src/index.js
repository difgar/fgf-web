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
  'cuentasVigentes': [
    {
      'nombre': 'Activos',
      'id': 1,
      'cuentas': [
        {
          'nombre': 'Bancos',
          'id': 11,
        },
        {
          'nombre': 'Cuentas x Cobrar',
          'id': 12,
        },
        {
          'nombre': 'Otros',
          'id': 13,
        },
      ],
    },
    {
      'nombre': 'Pasivos',
      'id': 2,
      'cuentas': [
        {
          'nombre': 'Capital',
          'id': 21,
        },
        {
          'nombre': 'Cuentas por Pagar',
          'id': 22,
        },
        {
          'nombre': 'Otros',
          'id': 23,
        },
      ],
    },
    {
      'nombre': 'Patrimonio',
      'id': 3,
      'cuentas': [
        {
          'nombre': 'Inscripciones',
          'id': 31,
        },
        {
          'nombre': 'Reservas',
          'id': 32,
        },
      ],
    },
  ],
  'cuentasCanceladas': [
    {
      'nombre': 'Activos',
      'id': 1,
      'cuentas': [
        {
          'nombre': 'Prestamos',
          'id': 11,
          'cuentas': [
            {
              'nombre': 'Vacaciones',
              'id': 111,
            },
            {
              'nombre': 'Vehiculo',
              'id': 121,
            },
          ],
        },
        {
          'nombre': 'Intereses Corrientes',
          'id': 12,
        },
      ],
    },
    {
      'nombre': 'Pasivos',
      'id': 2,
      'cuentas': [
        {
          'nombre': 'Cuentas por Pagar',
          'id': 22,
        },
        {
          'nombre': 'Otros',
          'id': 23,
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
