import gitTreinerImg from './../img/projects/img-apps/gt.png';
import stellarburger from './../img/projects/img-apps/sb.png';
import larek from './../img/projects/img-apps/wl.png';
import mesto from './../img/projects/img-apps/mr.png';

import gitTreinerImgMin from './../img/projects/img-apps-min/gt.jpg';
import stellarburgerMin from './../img/projects/img-apps-min/sb.jpg';
import larekMin from './../img/projects/img-apps-min/wl.jpg';
import mestoMin from './../img/projects/img-apps-min/mr.jpg';

export type TProject = {
  title: string;
  skills: string;
  img: string;
  imgBig: string;
  gitHubRepoLink: string;
  gitHubPagesLink: string;
};

const projectsApps: TProject[] = [
  {
    title: 'GitTreiner',
    skills: 'React, Redux',
    img: gitTreinerImgMin,
    imgBig: gitTreinerImg,
    gitHubRepoLink: 'https://github.com/SaparovPetr/gitTreiner',
    gitHubPagesLink: 'https://saparovpetr.github.io/gitTreiner/'
  },
  {
    title: 'Stellar Burger',
    img: stellarburgerMin,
    imgBig: stellarburger,
    skills: 'React, Redux',
    gitHubRepoLink: 'https://github.com/SaparovPetr/stellar-burger',
    gitHubPagesLink: 'https://saparovpetr.github.io/stellar-burger/'
  },
  {
    title: 'Web-larek',
    img: larekMin,
    imgBig: larek,
    skills: 'TS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/web-larek-frontend',
    gitHubPagesLink: 'https://saparovpetr.github.io/web-larek-frontend/'
  },
  {
    title: 'Mesto Russia',
    img: mesto,
    imgBig: mestoMin,
    skills: 'Vanila JS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/mesto-project-ff',
    gitHubPagesLink: 'https://saparovpetr.github.io/mesto-project-ff/'
  }
];

export { projectsApps };
