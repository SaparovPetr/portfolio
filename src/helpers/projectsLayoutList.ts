import { TProject } from '@utils-types';

import lt from './../img/projects/img-layouts/lt.png';
import nf from './../img/projects/img-layouts/nf.png';
import p from './../img/projects/img-layouts/p.png';
import pv from './../img/projects/img-layouts/pv.png';
import zt from './../img/projects/img-layouts/zt.png';
import ltMic from './../img/projects/img-layouts-mic/lt.jpg';
import nfMic from './../img/projects/img-layouts-mic/nf.jpg';
import pMic from './../img/projects/img-layouts-mic/p.jpg';
import pvMic from './../img/projects/img-layouts-mic/pv.jpg';
import ztMic from './../img/projects/img-layouts-mic/zt.jpg';
import ltMin from './../img/projects/img-layouts-min/lt.jpg';
import nfMin from './../img/projects/img-layouts-min/nf.jpg';
import pMin from './../img/projects/img-layouts-min/p.jpg';
import pvMin from './../img/projects/img-layouts-min/pv.jpg';
import ztMin from './../img/projects/img-layouts-min/zt.jpg';

const projectsLayouts: TProject[] = [
  {
    imgMic: ltMic,
    imgSmall: ltMin,
    imgBig: lt,
    title: 'Transcription storage',
    ruTitle: 'Хранилище транскрипций',
    skills: 'Stack: HTML, CSS',
    ruSkils: 'Стэк: HTML, CSS',
    description: '',
    ruDescription:
      'Хранилище транскрипций англоязычного подкаста Listening Time Podcast. Использую для изучения английского языка.',
    gitHubRepoLink: 'https://github.com',
    deploymentLink: 'http://podcast.saparovpetr.ru'
  },
  {
    imgMic: nfMic,
    imgSmall: nfMin,
    imgBig: nf,
    title: 'No focus',
    ruTitle: 'Сложно сосредоточиться',
    skills: 'Stack: HTML, CSS, Grid Layout',
    ruSkils: 'Стэк: HTML, CSS Grid Layout',
    description: '',
    ruDescription: 'Учебный проект. Лендинг с ночной темой на гридах.',
    gitHubRepoLink: 'https://github.com',
    deploymentLink: 'https://slozhno.saparovpetr.ru/'
  },
  {
    imgMic: pMic,
    imgSmall: pMin,
    imgBig: p,
    title: 'Pulsometr shop',
    ruTitle: 'Магазин пульсометров',
    skills: 'Stack: HTML, SCSS, JS, JQuery',
    ruSkils: 'Стэк: HTML, SCSS, JS, JQuery',
    description: '',
    ruDescription:
      'Простой Интернет-магазин с использованием сторонних скриптов.',
    gitHubRepoLink: 'https://github.com',
    deploymentLink: 'https://saparovpetr.github.io/pulse/'
  },
  {
    imgMic: pvMic,
    imgSmall: pvMin,
    imgBig: pv,
    title: 'Look at the window',
    ruTitle: 'Посмотри в окно',
    skills: 'Stack: HTML, CSS',
    ruSkils: 'Стэк: HTML, CSS',
    description: '',
    ruDescription: 'Учебный проект. Стилизация форм.',
    gitHubRepoLink: 'https://github.com',
    deploymentLink: 'https://look.saparovpetr.ru/'
  },
  {
    imgMic: ztMic,
    imgSmall: ztMin,
    imgBig: zt,
    title: 'Closing tag',
    ruTitle: 'Закрывающий тег',
    skills: 'Stack: HTML, CSS',
    ruSkils: 'Стэк: HTML, CSS',
    description: '',
    ruDescription: 'Учебный проект. Лендинг с ночной темой и анимацией.',
    gitHubRepoLink: 'https://github.com',
    deploymentLink: 'http://closing.saparovpetr.ru/'
  }
];

export { projectsLayouts };
