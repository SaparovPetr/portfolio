import gitHub from './../../img/icons/gitHub.svg';
import hh from './../../img/icons/hh.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import tg from './../../img/icons/tg.svg';
import styles from './style.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li className={styles.social__item}>
        <a target='_blank' href='https://t.me/SaparovPetr'>
          <img
            className={styles.social__icon}
            src={tg}
            alt='иконка телеграмм'
          />
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          target='_blank'
          href='https://hh.ru/resume/86eb1c91ff0c136b970039ed1f4f4c36754872'
        >
          <img
            className={styles.social__icon}
            src={hh}
            alt='иконка хэдхантера'
          />
        </a>
      </li>
      <li className={styles.social__item}>
        <a target='_blank' href='https://github.com/SaparovPetr'>
          <img
            className={styles.social__icon}
            src={gitHub}
            alt='иконка гитхабаа'
          />
        </a>
      </li>
      {/* <li className={styles.social__item}>
        <a href='#!'>
          <img
            className={styles.social__icon}
            src={linkedIn}
            alt='иконка линк ин'
          />
        </a>
      </li> */}
    </ul>
    <div className={styles.copyright}>
      <p>© 2024</p>
    </div>
  </footer>
);

export default Footer;
