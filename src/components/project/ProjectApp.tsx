import './style.css';
import { NavLink } from 'react-router-dom';
import { MyImage } from '../myImage/MyImage';
import { TProjectProps } from '@utils-types';

const ProjectApp = ({ title, imgS, imgXS, index }: TProjectProps) => (
  <NavLink to={`/project-app/${index}`}>
    <li className='project'>
      <MyImage
        src={imgS}
        placeholderSrc={imgXS}
        height='277'
        className='project__img'
      />
      <h3 className='project__title'>{title}</h3>
    </li>
  </NavLink>
);

export default ProjectApp;
