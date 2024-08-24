import { useLocation, useParams } from 'react-router-dom';

import { projectsApps } from '../../helpers/projectsAppList';
import { projectsLayouts } from '../../helpers/projectsLayoutList';

import BtnGitHubRepo from '../../components/btnGitHubRepo/BtnGitHubRepo';
import BtnGitHubPages from '../../components/btnGitHubPages/BtnGitHubPages';
import { MyImage } from '../../components/myImage/MyImage';
import { memo } from 'react';

const ProjectPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();

  if (pathname.includes('apps')) {
    const project = projectsApps[Number(id)];
    return (
      <main className='section'>
        <div className='container'>
          <div className='project-details'>
            <h1 className='title-1'>{project.title}</h1>

            <MyImage
              src={project.imgBig}
              alt={'скриншот проекта'}
              placeholderSrc={project.imgSmall}
              height='649'
              className='project-details__cover'
            />

            <div className='project-details__desc'>
              <p>Skills: {project.skills}</p>
            </div>

            <div className='project-details__buttons'>
              <BtnGitHubPages link={project.gitHubPagesLink} />
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
            <h1 className='title-1'>{project.title}</h1>

            <MyImage
              src={project.imgBig}
              alt={'скриншот проекта'}
              placeholderSrc={project.imgSmall}
              height='649'
              className='project-details__cover'
            />

            <div className='project-details__desc'>
              <p>Skills: {project.skills}</p>
            </div>

            <div className='project-details__buttons'>
              <BtnGitHubPages link={project.gitHubPagesLink} />
              <BtnGitHubRepo link={project.gitHubRepoLink} />
            </div>
          </div>
        </div>
      </main>
    );
  }
});

export default ProjectPage;
