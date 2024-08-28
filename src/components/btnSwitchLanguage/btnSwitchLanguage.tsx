import './style.css';

import { LanguageMode } from '@utils-types';

import en from './en.svg';
import ru from './ru.svg';
import {
  selectModeState,
  setLanguage
} from '../../services/slices/language-slice';
import { useAppDispatch, useAppSelector } from '../../services/store';

const BtnSwitchLanguage = () => {
  const dispatch = useAppDispatch();

  const toggleLanguage = () => {
    const currientLanguageFromLocalStorage =
      localStorage.getItem(`currientLanguage`);
    if (currientLanguageFromLocalStorage === LanguageMode.Russian) {
      dispatch(setLanguage(LanguageMode.English));
    } else {
      dispatch(setLanguage(LanguageMode.Russian));
    }
  };

  const btnNormal = 'en-mode-btn';
  const btnActive = 'en-mode-btn en-mode-btn--active';
  const currientMode = useAppSelector(selectModeState);

  return (
    <button
      className={currientMode === LanguageMode.English ? btnActive : btnNormal}
      onClick={toggleLanguage}
    >
      <img src={ru} alt='иконка русского языка' className='en-mode-btn__icon' />
      <img
        src={en}
        alt='иконка английского языка'
        className='en-mode-btn__icon'
      />
    </button>
  );
};

export default BtnSwitchLanguage;
