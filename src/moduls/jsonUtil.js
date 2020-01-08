export const navBar = [];
const getParent = (raiz, hoja) => {

  if (raiz.length) {
    const array = raiz.map((el) => getParent(el, hoja)).filter((item) => item != null);
    if (array.length > 0) {
      return array[0];
    }
  }

  if (raiz.id === hoja.id) {
    const obj = { ...raiz };
    navBar.push(obj);
    return obj;
  }

  if (raiz.cuentas) {
    const array = raiz.cuentas.map((el) => getParent(el, hoja)).filter((item) => item != null);
    if (array.length > 0) {
      const obj = { ...raiz, cuenta: array[0] };
      navBar.push(obj);
      return obj;
    }
  }

  return null;
};

export default getParent;
