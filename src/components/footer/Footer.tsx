import './style.css';

import vk from './../../img/icons/vk.svg';
import hh from './../../img/icons/hh.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';
import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__wrapper'>
        <ul className='social'>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={vk} alt='Link' />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={hh} alt='Link' />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={gitHub} alt='Link' />
            </a>
          </li>
          <li className='social__item'>
            <a href='#!'>
              <img className='social__icon' src={linkedIn} alt='Link' />
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
