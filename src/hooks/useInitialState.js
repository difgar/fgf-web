import { useEffect, useState } from 'react';

const useInitialState = (API) => {

  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCuentas(data));
  }, []);

  return cuentas;
};

export default useInitialState;
