import './style.css';

import { useAppSelector } from '../../services/store';
import { selectModeState } from '../../services/slices/language-slice';
import { LanguageMode } from '@utils-types';

const Home = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>
            <strong>
              {currientMode === LanguageMode.English
                ? 'Hi, my name is'
                : 'Привет, я'}
              <em>
                {' '}
                {currientMode === LanguageMode.English ? 'Petr' : 'Петр'}
              </em>
            </strong>
            <br />
            {currientMode === LanguageMode.English
              ? 'a frontend developer'
              : 'фронтенд-разработчик'}
          </h1>
          <div className='header__text'>
            <p>
              {currientMode === LanguageMode.English
                ? ' with passion for learning and creating.'
                : 'со страстью к обучению и созиданию.'}
            </p>
          </div>
          <a href='/link-to-file-with-cv' className='btn'>
            {currientMode === LanguageMode.English
              ? 'Download CV'
              : 'Скачать резюме'}
          </a>
        </div>
      </header>
    </>
  );
};

export default Home;
