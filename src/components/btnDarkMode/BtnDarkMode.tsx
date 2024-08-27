import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        if (typeof setDarkMode === 'function') {
          setDarkMode(newColorScheme);
        } else {
          console.error('setDarkMode is not a function');
        }
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    if (typeof setDarkMode === 'function') {
      setDarkMode((currentValue: string) =>
        currentValue === 'light' ? 'dark' : 'light'
      );
    } else {
      console.error('setDarkMode is not a function');
    }
  };

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button
      className={darkMode === 'dark' ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt='светлая тема' className='dark-mode-btn__icon' />
      <img src={moon} alt='темная тема' className='dark-mode-btn__icon' />
    </button>
  );
};

export default BtnDarkMode;
