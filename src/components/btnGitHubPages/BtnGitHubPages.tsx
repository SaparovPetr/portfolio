import gitHubIcon from './gitHub-black.svg';
import './style.css';
import { TBtnGitHubProps } from '@utils-types';

const BtnGitHubPages = ({ link }: TBtnGitHubProps) => (
  <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
    <img src={gitHubIcon} alt='' />
    GH Pages
  </a>
);

export default BtnGitHubPages;
