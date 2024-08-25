import { projectsApps } from '../../helpers/projectsAppList';
import ProjectApp from '../../components/project/ProjectApp';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../services/store';
import { selectModeState } from '../../services/slices/language-slice';
import { LanguageMode } from '@utils-types';

const ProjectApps = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>
          {currientMode === LanguageMode.English
            ? 'Applications'
            : 'Приложения'}
        </h2>
        <ul className='projects'>
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
      </div>
    </main>
  );
};
export default ProjectApps;
