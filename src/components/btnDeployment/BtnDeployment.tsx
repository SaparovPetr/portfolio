import netlifyIcon from './netlifyIcon.svg';
import './style.css';
import { TBtnGitHubProps } from '@utils-types';

const BtnDeployment = ({ link }: TBtnGitHubProps) => (
  <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
    <img src={netlifyIcon} alt='' />
    Deployment
  </a>
);

export default BtnDeployment;
