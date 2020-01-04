/* eslint-disable no-case-declarations */
const reducer = (state, action) => {

  switch (action.type) {
    case 'UPDATE_NAV':
      return {
        ...state,
        nav: action.payload,
      };
    case 'UPDATE_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };
    case 'SET_SOCIO':
      const x = {
        ...state,
        socios: [...state.socios, action.payload],
      };
      return x;
    case 'DELETE_SOCIO':
      return {
        ...state,
        socios: state.socios.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
