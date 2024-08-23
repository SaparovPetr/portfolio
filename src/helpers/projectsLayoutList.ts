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

import ltMic from './../img/projects/img-layouts-mic/lt.jpg';
import nfMic from './../img/projects/img-layouts-mic/nf.jpg';
import pMic from './../img/projects/img-layouts-mic/p.jpg';
import pvMic from './../img/projects/img-layouts-mic/pv.jpg';
import ztMic from './../img/projects/img-layouts-mic/zt.jpg';
import { TProject } from '@utils-types';

const projectsLayouts: TProject[] = [
  {
    title: 'Listening time podcast',
    skills: 'HTML, CSS',
    imgMic: ltMic,
    imgSmall: ltMin,
    imgBig: lt,
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://podcast.saparovpetr.ru'
  },
  {
    title: 'No focus',
    imgMic: nfMic,
    imgSmall: nfMin,
    imgBig: nf,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://slozhno.saparovpetr.ru/'
  },
  {
    title: 'Pulsometr store',
    imgMic: pMic,
    imgSmall: pMin,
    imgBig: p,
    skills: 'HTML, CSS, JS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://saparovpetr.github.io/pulse/'
  },
  {
    title: 'Look at the window',
    imgMic: pvMic,
    imgSmall: pvMin,
    imgBig: pv,
    skills: 'HTML, CSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'https://look.saparovpetr.ru/'
  },
  {
    title: 'Closing tag',
    imgMic: ztMic,
    imgSmall: ztMin,
    imgBig: zt,
    skills: 'HTML, SCSS',
    gitHubRepoLink: 'https://github.com',
    gitHubPagesLink: 'http://closing.saparovpetr.ru/'
  }
];

export { projectsLayouts };
