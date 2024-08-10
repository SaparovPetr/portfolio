import { projectsLayouts } from '../helpers/projectsLayoutList';
import ProjectLayout from '../components/project/ProjectLayout';

const ProjectLayouts = () => (
  <main className='section'>
    <div className='container'>
      <section className='layouts'>
        <h2 className='title-1'>Layouts</h2>
        <ul className='projects'>
          {projectsLayouts.map((projectLayout, index) => (
            <ProjectLayout
              key={index}
              title={projectLayout.title}
              img={projectLayout.img}
              index={index}
            />
          ))}
        </ul>
      </section>
    </div>
  </main>
);

export default ProjectLayouts;
