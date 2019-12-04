import { useEffect, useState } from 'react';

const useInitialState = (API) => {

  const [dataRaw, setDataRaw] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setDataRaw(data));
  }, []);

  return dataRaw;
};

export default useInitialState;
