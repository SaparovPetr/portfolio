import { projectsApps } from '../helpers/projectsAppList';
import ProjectApp from '../components/project/ProjectApp';

const ProjectApps = () => (
  <main className='section'>
    <div className='container'>
      <section className='applications'>
        <h2 className='title-1'>Applications</h2>
        <ul className='projects'>
          {projectsApps.map((projectApp, index) => (
            <ProjectApp
              key={index}
              title={projectApp.title}
              img={projectApp.img}
              index={index}
            />
          ))}
        </ul>
      </section>
    </div>
  </main>
);

export default ProjectApps;
