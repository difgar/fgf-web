/* eslint-disable no-case-declarations */
const reducer = (state, action) => {

  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
