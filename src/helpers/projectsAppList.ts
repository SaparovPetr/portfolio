import gitTreinerImg from './../img/projects/img-apps/gt.png';
import stellarburger from './../img/projects/img-apps/sb.png';
import larek from './../img/projects/img-apps/wl.png';
import mesto from './../img/projects/img-apps/mr.png';

import gitTreinerImgMin from './../img/projects/img-apps-min/gt.jpg';
import stellarburgerMin from './../img/projects/img-apps-min/sb.jpg';
import larekMin from './../img/projects/img-apps-min/wl.jpg';
import mestoMin from './../img/projects/img-apps-min/mr.jpg';

import gitTreinerImgMic from './../img/projects/img-apps-mic/gt.jpg';
import stellarburgerMic from './../img/projects/img-apps-mic/sb.jpg';
import larekMic from './../img/projects/img-apps-mic/wl.jpg';
import mestoMic from './../img/projects/img-apps-mic/mr.jpg';
import { TProject } from '@utils-types';

const projectsApps: TProject[] = [
  {
    title: 'GitTreiner',
    skills: 'React, Redux',
    imgMic: gitTreinerImgMic,
    imgSmall: gitTreinerImgMin,
    imgBig: gitTreinerImg,
    gitHubRepoLink: 'https://github.com/SaparovPetr/gitTreiner',
    gitHubPagesLink: 'https://saparovpetr.github.io/gitTreiner/'
  },
  {
    title: 'Stellar Burger',
    imgMic: stellarburgerMic,
    imgSmall: stellarburgerMin,
    imgBig: stellarburger,
    skills: 'React, Redux',
    gitHubRepoLink: 'https://github.com/SaparovPetr/stellar-burger',
    gitHubPagesLink: 'https://saparovpetr.github.io/stellar-burger/'
  },
  {
    title: 'Web-larek',
    imgMic: larekMic,
    imgSmall: larekMin,
    imgBig: larek,
    skills: 'TS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/web-larek-frontend',
    gitHubPagesLink: 'https://saparovpetr.github.io/web-larek-frontend/'
  },
  {
    title: 'Mesto Russia',
    imgMic: mestoMic,
    imgSmall: mestoMin,
    imgBig: mesto,
    skills: 'Vanila JS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/mesto-project-ff',
    gitHubPagesLink: 'https://saparovpetr.github.io/mesto-project-ff/'
  }
];

export { projectsApps };
