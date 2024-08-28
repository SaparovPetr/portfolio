import { LanguageMode } from '@utils-types';

import styles from './style.module.css';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

const Home = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className={styles.section}>
      <div className={styles.home_page}>
        <h1 className={styles.home_page__title}>
          <strong>
            {currientMode === LanguageMode.English
              ? 'Hi, my name is'
              : 'Привет, я'}
            <em> {currientMode === LanguageMode.English ? 'Petr' : 'Петр'}</em>
          </strong>
          <br />
          {currientMode === LanguageMode.English
            ? 'a frontend developer'
            : 'фронтенд-разработчик'}
        </h1>
        <div className={styles.home_page__text}>
          <p>
            {currientMode === LanguageMode.English
              ? ' with passion for learning and creating.'
              : 'со страстью к обучению и созиданию.'}
          </p>
        </div>
        <a href='/link-to-file-with-cv' className={styles.btn}>
          {currientMode === LanguageMode.English
            ? 'Download CV'
            : 'Скачать резюме'}
        </a>
      </div>
    </main>
  );
};

export default Home;
