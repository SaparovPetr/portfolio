import { LanguageMode, TMyProjectsProps } from '@utils-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import ProjectApp from '../../components/project/ProjectApp';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

/**Старница с карточками проектов */
const MyProjects = ({ array }: TMyProjectsProps) => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className={styles.section}>
      <h2 className={styles.title_1}>
        {currientMode === LanguageMode.English ? 'Applications' : 'Приложения'}
      </h2>
      <ul className={styles.projects}>
        {array.map((concreteProject, index) => (
          <Link to={`${index}`} key={index}>
            <ProjectApp
              title={
                currientMode === LanguageMode.English
                  ? concreteProject.title
                  : concreteProject.ruTitle
              }
              imgS={concreteProject.imgSmall}
              imgXS={concreteProject.imgMic}
            />
          </Link>
        ))}
      </ul>
    </main>
  );
};
export default MyProjects;
