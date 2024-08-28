import React from 'react';

import { LanguageMode } from '@utils-types';

import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

const Contacts = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>
          {currientMode === LanguageMode.English ? 'Contacts' : 'Контакты:'}
        </h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>
              {currientMode === LanguageMode.English ? 'Location' : 'Локация'}
            </h2>
            <p>
              {currientMode === LanguageMode.English
                ? 'Moscow, Russia'
                : 'Москва, Россия'}
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:+79051234567'>+7 (916) 607-89-94</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p>
              <a href='mailto:saparov.petr@gmail.com'>saparov.petr@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
