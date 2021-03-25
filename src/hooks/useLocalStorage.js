import { useEffect, useState } from "react";

function useLocalStorage(KEY, initial) {
  const [state, setState] = useState(pullFormLS(KEY) || getInital());

  function getInital() {
    if (initial instanceof Function) return initial();
    return initial;
  }

  function pullFormLS() {
    return JSON.parse(localStorage.getItem(KEY));
  }
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, KEY]);

  return [state, setState];
}

export default useLocalStorage;
