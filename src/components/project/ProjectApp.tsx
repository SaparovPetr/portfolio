import { NavLink } from 'react-router-dom';
import './style.css';
import { TProjectProps } from '@utils-types';

const ProjectApp = ({ title, img, index }: TProjectProps) => (
  <NavLink to={`/project-app/${index}`}>
    <li className='project'>
      <img src={img} alt={title} className='project__img' />
      <h3 className='project__title'>{title}</h3>
    </li>
  </NavLink>
);

export default ProjectApp;
