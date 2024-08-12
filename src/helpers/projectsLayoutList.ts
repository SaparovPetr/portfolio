import lt from './../img/projects/img-layouts/lt.png';
import nf from './../img/projects/img-layouts/nf.png';
import p from './../img/projects/img-layouts/p.png';
import pv from './../img/projects/img-layouts/pv.png';
import zt from './../img/projects/img-layouts/zt.png';

import ltMin from './../img/projects/img-layouts-min/lt.jpg';
import nfMin from './../img/projects/img-layouts-min/nf.jpg';
import pMin from './../img/projects/img-layouts-min/p.jpg';
import pvMin from './../img/projects/img-layouts-min/pv.jpg';
import ztMin from './../img/projects/img-layouts-min/zt.jpg';

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
    img: ltMin,
    imgBig: lt,
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://podcast.saparovpetr.ru'
  },
  {
    title: 'No focus',
    img: nfMin,
    imgBig: nf,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://slozhno.saparovpetr.ru/'
  },
  {
    title: 'Pulsometr store',
    img: pMin,
    imgBig: p,
    skills: 'HTML, CSS, JS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://saparovpetr.github.io/pulse/'
  },
  {
    title: 'Look at the window',
    img: pvMin,
    imgBig: pv,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://look.saparovpetr.ru/'
  },
  {
    title: 'Closing tag',
    img: ztMin,
    imgBig: zt,
    skills: 'HTML, SCSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://closing.saparovpetr.ru/'
  }
];

export { projectsLayouts };
