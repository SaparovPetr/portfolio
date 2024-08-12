import lt from './../img/projects/img-layouts/lt.png';
import nf from './../img/projects/img-layouts/nf.png';
import p from './../img/projects/img-layouts/p.png';
import pv from './../img/projects/img-layouts/pv.png';
import zt from './../img/projects/img-layouts/zt.png';

export type TProject = {
  title: string;
  skills: string;
  img: string;
  imgBig: string;
  gitHubRepoLink: string;
  gitHubPagesLink: string;
};

const projectsLayouts: TProject[] = [
  {
    title: 'Listening time podcast',
    skills: 'HTML, CSS',
    img: lt,
    imgBig: lt,
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://podcast.saparovpetr.ru'
  },
  {
    title: 'No focus',
    img: nf,
    imgBig: nf,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://slozhno.saparovpetr.ru/'
  },
  {
    title: 'Pulsometr store',
    img: p,
    imgBig: p,
    skills: 'HTML, CSS, JS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://saparovpetr.github.io/pulse/'
  },
  {
    title: 'Look at the window',
    img: pv,
    imgBig: pv,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://look.saparovpetr.ru/'
  },
  {
    title: 'Closing tag',
    img: zt,
    imgBig: zt,
    skills: 'HTML, SCSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://closing.saparovpetr.ru/'
  }
];

export { projectsLayouts };
