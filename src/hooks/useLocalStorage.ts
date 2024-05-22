import { useState } from 'react';
const initial = '# Welcome to my Markdown Editor!\n\nYou can now start editing your Markdown.\n\nYour changes will be saved in the local storage of your device!'

export const useLocalStorage = (key: string, initialValue: string = initial) => {
  const storedValue = localStorage.getItem(key) || initialValue;
    const parsedValue = storedValue !== null ? JSON.parse(storedValue) : initialValue;
const [value, setValue] = useState<string>(parsedValue);

  const setItem = (value: string) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return { value, setItem };
};
