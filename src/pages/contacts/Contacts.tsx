import { LanguageMode } from '@utils-types';

import styles from './style.module.css';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

/**Страница Контакты */
const Contacts = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className={styles.section}>
      <h1 className={styles.title_1}>
        {currientMode === LanguageMode.English ? 'Contacts' : 'Контакты:'}
      </h1>

      <ul className={styles.content_list}>
        <li className={styles.content_list__item}>
          <h2 className={styles.title_2}>
            {currientMode === LanguageMode.English ? 'Location' : 'Локация'}
          </h2>
          <p>
            {currientMode === LanguageMode.English
              ? 'Moscow, Russia'
              : 'Москва, Россия'}
          </p>
        </li>
        <li className={styles.content_list__item}>
          <h2 className={styles.title_2}>Telegram / WhatsApp</h2>
          <p>
            <a href='tel:+79051234567'>+7 (916) 607-89-94</a>
          </p>
        </li>
        <li className={styles.content_list__item}>
          <h2 className={styles.title_2}>Email</h2>
          <p>
            <a href='mailto:saparov.petr@gmail.com'>saparov.petr@gmail.com</a>
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Contacts;
