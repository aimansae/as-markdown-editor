import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string = '') => {
  const storedValue = localStorage.getItem(key) || initialValue;
  const [value, setValue] = useState<string>(storedValue);

  const setItem = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return { value, setItem };
};
