import { TBtnGitHubProps } from '@utils-types';
import gitHubIcon from './gitHub-black.svg';
import './style.css';

const BtnGitHubRepo = ({ link }: TBtnGitHubProps) => (
  <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
    <img src={gitHubIcon} alt='' />
    <p>GH Repo</p>
  </a>
);

export default BtnGitHubRepo;
