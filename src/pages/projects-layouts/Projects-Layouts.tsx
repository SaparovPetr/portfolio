import { projectsLayouts } from '../../helpers/projectsLayoutList';
import ProjectLayout from '../../components/project/ProjectLayout';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../services/store';
import { selectModeState } from '../../services/slices/language-slice';
import { LanguageMode } from '@utils-types';

const ProjectLayouts = () => {
  const currientMode = useAppSelector(selectModeState);

  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>
          {currientMode === LanguageMode.English ? 'Layouts' : 'Верстка'}
        </h2>
        <ul className='projects'>
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
      </div>
    </main>
  );
};
export default ProjectLayouts;
