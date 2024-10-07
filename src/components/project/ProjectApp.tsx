import './style.css';

import { memo } from 'react';

import { TProjectProps } from '@utils-types';

import { MyImage } from '../myImage/MyImage';

const ProjectApp = memo(({ title, imgS, imgXS }: TProjectProps) => (
  <li className='project'>
    <MyImage
      src={imgS}
      placeholderSrc={imgXS}
      height='277'
      className='project__img'
      alt={'скриншот проекта'}
    />
    <h3 className='project__title'>{title}</h3>
  </li>
));

export default ProjectApp;
