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
    imgMic: gitTreinerImgMic,
    imgSmall: gitTreinerImgMin,
    imgBig: gitTreinerImg,
    title: 'GitTreiner',
    ruTitle: 'GitTreiner',
    skills: 'React, Redux',
    ruSkils: '',
    description: '',
    ruDescription: '',
    gitHubRepoLink: 'https://github.com/SaparovPetr/gitTreiner',
    deploymentLink: 'https://saparovpetr.github.io/gitTreiner/'
  },
  {
    imgMic: stellarburgerMic,
    imgSmall: stellarburgerMin,
    imgBig: stellarburger,
    title: 'Stellar Burger',
    ruTitle: 'Космическая бургерная',
    skills: 'React, Redux',
    ruSkils: '',
    description: '',
    ruDescription: '',
    gitHubRepoLink: 'https://github.com/SaparovPetr/stellar-burger',
    deploymentLink: 'https://saparovpetr.github.io/stellar-burger/'
  },
  {
    imgMic: larekMic,
    imgSmall: larekMin,
    imgBig: larek,
    title: 'Web-stall',
    ruTitle: 'Web-ларёк',
    skills: 'TS',
    ruSkils: '',
    description: '',
    ruDescription: '',
    gitHubRepoLink: 'https://github.com/SaparovPetr/web-larek-frontend',
    deploymentLink: 'https://saparovpetr.github.io/web-larek-frontend/'
  },
  {
    imgMic: mestoMic,
    imgSmall: mestoMin,
    imgBig: mesto,
    title: 'Mesto',
    ruTitle: 'Место',
    skills: 'Vanila JS',
    ruSkils: '',
    description: '',
    ruDescription: '',
    gitHubRepoLink: 'https://github.com/SaparovPetr/mesto-project-ff',
    deploymentLink: 'https://saparovpetr.github.io/mesto-project-ff/'
  }
];

export { projectsApps };
