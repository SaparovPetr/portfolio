import { LanguageMode } from '@utils-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import ProjectApp from '../../components/project/ProjectApp';
import { projectsApps } from '../../helpers/projectsAppList';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

const ProjectApps = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className={styles.section}>
      <h2 className={styles.title_1}>
        {currientMode === LanguageMode.English ? 'Applications' : 'Приложения'}
      </h2>
      <ul className={styles.projects}>
        {projectsApps.map((projectApp, index) => (
          <Link to={`/apps/${index}`} key={index}>
            <ProjectApp
              title={
                currientMode === LanguageMode.English
                  ? projectApp.title
                  : projectApp.ruTitle
              }
              imgS={projectApp.imgSmall}
              imgXS={projectApp.imgMic}
            />
          </Link>
        ))}
      </ul>
    </main>
  );
};
export default ProjectApps;
