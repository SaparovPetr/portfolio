import { projectsApps } from '../../helpers/projectsAppList';
import ProjectApp from '../../components/project/ProjectApp';

const ProjectApps = () => (
  <main className='section'>
    <div className='container'>
      <h2 className='title-1'>Applications</h2>
      <ul className='projects'>
        {projectsApps.map((projectApp, index) => (
          <ProjectApp
            key={index}
            title={projectApp.title}
            imgS={projectApp.imgSmall}
            imgXS={projectApp.imgMic}
            index={index}
          />
        ))}
      </ul>
    </div>
  </main>
);

export default ProjectApps;
