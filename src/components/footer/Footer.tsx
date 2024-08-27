import './style.css';

import vk from './../../img/icons/vk.svg';
import hh from './../../img/icons/hh.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__wrapper'>
        <ul className='social'>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={vk} alt='иконка вконтакте' />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={hh} alt='иконка хэдхантера' />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img
                className='social__icon'
                src={gitHub}
                alt='иконка гитхабаа'
              />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img
                className='social__icon'
                src={linkedIn}
                alt='иконка линк ин'
              />
            </a>
          </li>
        </ul>
        <div className='copyright'>
          <p>© 2024</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
