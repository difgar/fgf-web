/* eslint-disable no-case-declarations */
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_SOCIO':
      const x = {
        ...state,
        socios: [...state.socios, action.payload],
      };
      return x;
    default:
      return state;
  }
};

export default reducer;
