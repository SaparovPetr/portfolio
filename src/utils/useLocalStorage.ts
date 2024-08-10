/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';

function getStorageValue(key: any, defaultValue: string) {
  // getting stored value
  const saved = localStorage.getItem(key);
  // const initial = JSON.parse(saved);
  return defaultValue;
}

export const useLocalStorage = (key: any, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
