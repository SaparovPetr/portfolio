import { projectsApps } from '../../helpers/projectsAppList';
import ProjectApp from '../../components/project/ProjectApp';
import { Link, NavLink, useLocation } from 'react-router-dom';

const ProjectApps = () => (
  <main className='section'>
    <div className='container'>
      <h2 className='title-1'>Applications</h2>
      <ul className='projects'>
        {projectsApps.map((projectApp, index) => (
          <Link to={`/apps/${index}`} key={index}>
            <ProjectApp
              title={projectApp.title}
              imgS={projectApp.imgSmall}
              imgXS={projectApp.imgMic}
            />
          </Link>
        ))}
      </ul>
    </div>
  </main>
);
export default ProjectApps;
