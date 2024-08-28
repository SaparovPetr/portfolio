import { LanguageMode } from '@utils-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import ProjectLayout from '../../components/project/ProjectLayout';
import { projectsLayouts } from '../../helpers/projectsLayoutList';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

const ProjectLayouts = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className={styles.section}>
      <h2 className={styles.title_1}>
        {currientMode === LanguageMode.English ? 'Layouts' : 'Верстка'}
      </h2>
      <ul className={styles.projects}>
        {projectsLayouts.map((projectLayout, index) => (
          <Link to={{ pathname: `/layouts/${index}` }} key={index}>
            <ProjectLayout
              title={
                currientMode === LanguageMode.English
                  ? projectLayout.title
                  : projectLayout.ruTitle
              }
              imgS={projectLayout.imgSmall}
              imgXS={projectLayout.imgMic}
            />
          </Link>
        ))}
      </ul>
    </main>
  );
};
export default ProjectLayouts;
