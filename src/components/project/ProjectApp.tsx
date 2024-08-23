import './style.css';
import { MyImage } from '../myImage/MyImage';
import { TProjectProps } from '@utils-types';

const ProjectApp = ({ title, imgS, imgXS }: TProjectProps) => (
  <li className='project'>
    <MyImage
      src={imgS}
      placeholderSrc={imgXS}
      height='277'
      className='project__img'
    />
    <h3 className='project__title'>{title}</h3>
  </li>
);

export default ProjectApp;
