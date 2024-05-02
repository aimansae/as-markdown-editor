import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string = '') => {
  const storedValue = localStorage.getItem(key) || initialValue;
  const [value, setValue] = useState<string>(storedValue);

  const setItem = (value: string) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return { value, setItem };
};
