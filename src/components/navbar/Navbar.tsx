import './style.css';

import { LanguageMode } from '@utils-types';
import { NavLink } from 'react-router-dom';

import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import BtnSwitchLanguage from '../btnSwitchLanguage/btnSwitchLanguage';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  const currientMode = useAppSelector(selectModeState);

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
            <strong>Portfolio</strong>
          </NavLink>

          <div className='nav-aria-wrapper'>
            <BtnSwitchLanguage />
            <BtnDarkMode />

            <ul className='nav-list'>
              <li className='nav-list__item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {currientMode === LanguageMode.English ? 'Home' : 'Главная'}
                </NavLink>
              </li>

              <li className='nav-list__item'>
                <NavLink
                  to='/apps'
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {currientMode === LanguageMode.English
                    ? 'My applications'
                    : 'Мои приложения'}
                </NavLink>
              </li>

              <li className='nav-list__item'>
                <NavLink
                  to='/layouts'
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {currientMode === LanguageMode.English
                    ? 'My layouts'
                    : 'Моя верстка'}
                </NavLink>
              </li>

              <li className='nav-list__item'>
                <NavLink
                  to='/contacts'
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {currientMode === LanguageMode.English
                    ? 'Contacts'
                    : 'Контакты'}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
