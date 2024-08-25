import { useLocation, useParams } from 'react-router-dom';

import { projectsApps } from '../../helpers/projectsAppList';
import { projectsLayouts } from '../../helpers/projectsLayoutList';

import BtnGitHubRepo from '../../components/btnGitHubRepo/BtnGitHubRepo';
import BtnDeployment from '../../components/btnDeployment/BtnDeployment';
import { MyImage } from '../../components/myImage/MyImage';
import { memo } from 'react';

import { useAppSelector } from '../../services/store';
import { selectModeState } from '../../services/slices/language-slice';
import { LanguageMode } from '@utils-types';

const ProjectPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const currientMode = useAppSelector(selectModeState);

  if (pathname.includes('apps')) {
    const project = projectsApps[Number(id)];
    return (
      <main className='section'>
        <div className='container'>
          <div className='project-details'>
            <h1 className='title-1'>
              {currientMode === LanguageMode.English
                ? project.title
                : project.ruTitle}
            </h1>

            <MyImage
              src={project.imgBig}
              alt={'скриншот проекта'}
              placeholderSrc={project.imgSmall}
              height='649'
              className='project-details__cover'
            />

            <div className='project-details__desc'>
              <p>{project.skills}</p>
            </div>

            <div className='project-details__buttons'>
              <BtnDeployment link={project.deploymentLink} />
              <BtnGitHubRepo link={project.gitHubRepoLink} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (pathname.includes('layouts')) {
    const project = projectsLayouts[Number(id)];
    return (
      <main className='section'>
        <div className='container'>
          <div className='project-details'>
            <h1 className='title-1'>
              {' '}
              {currientMode === LanguageMode.English
                ? project.title
                : project.ruTitle}
            </h1>

            <MyImage
              src={project.imgBig}
              alt={'скриншот проекта'}
              placeholderSrc={project.imgSmall}
              height='649'
              className='project-details__cover'
            />

            <div className='project-details__desc'>
              <p>{project.skills}</p>
            </div>

            <div className='project-details__buttons'>
              <BtnDeployment link={project.deploymentLink} />
              <BtnGitHubRepo link={project.gitHubRepoLink} />
            </div>
          </div>
        </div>
      </main>
    );
  }
});

export default ProjectPage;
