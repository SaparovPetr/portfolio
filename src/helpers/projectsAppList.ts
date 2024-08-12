import gitTreinerImg from './../img/projects/img-apps/gt.png';
import stellarburger from './../img/projects/img-apps/sb.png';
import larek from './../img/projects/img-apps/wl.png';
import mesto from './../img/projects/img-apps/mr.png';

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
    img: gitTreinerImg,
    imgBig: gitTreinerImg,
    gitHubRepoLink: 'https://github.com/SaparovPetr/gitTreiner',
    gitHubPagesLink: 'https://saparovpetr.github.io/gitTreiner/'
  },
  {
    title: 'Stellar Burger',
    img: stellarburger,
    imgBig: stellarburger,
    skills: 'React, Redux',
    gitHubRepoLink: 'https://github.com/SaparovPetr/stellar-burger',
    gitHubPagesLink: 'https://saparovpetr.github.io/stellar-burger/'
  },
  {
    title: 'Web-larek',
    img: larek,
    imgBig: larek,
    skills: 'TS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/web-larek-frontend',
    gitHubPagesLink: 'https://saparovpetr.github.io/web-larek-frontend/'
  },
  {
    title: 'Mesto Russia',
    img: mesto,
    imgBig: mesto,
    skills: 'Vanila JS',
    gitHubRepoLink: 'https://github.com/SaparovPetr/mesto-project-ff',
    gitHubPagesLink: 'https://saparovpetr.github.io/mesto-project-ff/'
  }
];

export { projectsApps };
