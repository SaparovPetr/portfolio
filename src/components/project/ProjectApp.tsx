import './style.css';
import { NavLink } from 'react-router-dom';
// import { TProjectProps } from '@utils-types';
import { MyImage } from '../myImage/MyImage';

export type TProjectProps = {
  title: string;
  imgS: string;
  imgXS: string;
  index: number;
};

export type TBtnGitHubProps = {
  link: string;
};

const ProjectApp = ({ title, imgS, imgXS, index }: TProjectProps) => (
  <NavLink to={`/project-app/${index}`}>
    <li className='project'>
      {/* <img src={img} alt={title} className='project__img' /> */}
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
