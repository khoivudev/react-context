import {useState} from 'react';

export const useToggleState = (initVal = false) => {
  const [state, setState] = useState(initVal);
  const toggle = () => {
    setState(!state);
  }
  return [state, toggle]
}