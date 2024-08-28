import { FC } from 'react';

import styles from './style.module.css';

export const NotFound404: FC = () => (
  <main className={styles.section}>
    <div className={styles.page_not_found}>
      <h3>Страница не найдена 😒</h3>
      <p>Ошибка 404</p>
    </div>
  </main>
);
