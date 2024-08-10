import { NavLink } from 'react-router-dom';
import './style.css';
import React from 'react';
import { TProjectProps } from '@utils-types';

const ProjectLayout = ({ title, img, index }: TProjectProps) => (
  <NavLink to={`/project-layout/${index}`}>
    <li className='project'>
      <img src={img} alt={title} className='project__img' />
      <h3 className='project__title'>{title}</h3>
    </li>
  </NavLink>
);

export default ProjectLayout;
