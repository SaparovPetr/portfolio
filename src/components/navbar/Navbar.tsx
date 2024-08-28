import { LanguageMode } from '@utils-types';
import { NavLink } from 'react-router-dom';

import styles from './style.module.css';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import BtnSwitchLanguage from '../btnSwitchLanguage/btnSwitchLanguage';

const Navbar = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <nav className={styles.nav}>
      <NavLink to='/' className={styles.logo}>
        Portfolio
      </NavLink>

      <div className={styles.nav_wrapper}>
        <BtnSwitchLanguage />
        <BtnDarkMode />

        <ul className={styles.nav_list}>
          <li className={styles.nav_list__item}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.nav_list__link__active : styles.nav_list__link
              }
            >
              {currientMode === LanguageMode.English ? 'Home' : 'Главная'}
            </NavLink>
          </li>

          <li className={styles.nav_list__item}>
            <NavLink
              to='/apps'
              className={({ isActive }) =>
                isActive ? styles.nav_list__link__active : styles.nav_list__link
              }
            >
              {currientMode === LanguageMode.English
                ? 'My applications'
                : 'Мои приложения'}
            </NavLink>
          </li>

          <li className={styles.nav_list__item}>
            <NavLink
              to='/layouts'
              className={({ isActive }) =>
                isActive ? styles.nav_list__link__active : styles.nav_list__link
              }
            >
              {currientMode === LanguageMode.English
                ? 'My layouts'
                : 'Моя верстка'}
            </NavLink>
          </li>

          <li className={styles.nav_list__item}>
            <NavLink
              to='/contacts'
              className={({ isActive }) =>
                isActive ? styles.nav_list__link__active : styles.nav_list__link
              }
            >
              {currientMode === LanguageMode.English ? 'Contacts' : 'Контакты'}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
