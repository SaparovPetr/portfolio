import { projectsLayouts } from '../../helpers/projectsLayoutList';
import ProjectLayout from '../../components/project/ProjectLayout';
import { Link, NavLink } from 'react-router-dom';

const ProjectLayouts = () => (
  <main className='section'>
    <div className='container'>
      <h2 className='title-1'>Layouts</h2>
      <ul className='projects'>
        {projectsLayouts.map((projectLayout, index) => (
          <Link to={{ pathname: `/layouts/${index}` }} key={index}>
            <ProjectLayout
              title={projectLayout.title}
              imgS={projectLayout.imgSmall}
              imgXS={projectLayout.imgMic}
            />
          </Link>
        ))}
      </ul>
    </div>
  </main>
);

export default ProjectLayouts;
