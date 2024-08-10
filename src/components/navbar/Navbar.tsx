import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
            <strong>Saparov Petr's</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className='nav-list__item'>
              <NavLink
                to='/apps'
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Applications
              </NavLink>
            </li>

            <li className='nav-list__item'>
              <NavLink
                to='/layouts'
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Layouts
              </NavLink>
            </li>

            <li className='nav-list__item'>
              <NavLink
                to='/contacts'
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
