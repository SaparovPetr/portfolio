import { memo } from 'react';

import { LanguageMode } from '@utils-types';
import { useLocation, useParams } from 'react-router-dom';

import styles from './style.module.css';
import BtnGoTo from '../../components/btnGoTo/btnGoTo';
import { MyImage } from '../../components/myImage/MyImage';
import { projectsApps } from '../../helpers/projectsAppList';
import { projectsLayouts } from '../../helpers/projectsLayoutList';
import gitHubIcon from '../../img/icons/gitHub-black.svg';
import netlifyIcon from '../../img/icons/netlifyIcon.svg';
import { selectModeState } from '../../services/slices/language-slice';
import { useAppSelector } from '../../services/store';

/**Страница конкретного проекта */
const ProjectPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const currientMode = useAppSelector(selectModeState);

  const project = pathname.includes('apps')
    ? projectsApps[Number(id)]
    : projectsLayouts[Number(id)];

  return (
    <main className={styles.section}>
      <h1 className={styles.title_1}>
        {currientMode === LanguageMode.English
          ? project.title
          : project.ruTitle}
      </h1>

      <MyImage
        src={project.imgBig}
        alt={'скриншот проекта'}
        placeholderSrc={project.imgSmall}
        height='649'
        className={styles.project_details__cover}
      />

      <div className={styles.project_details__desc}>
        <p className={styles.project_details__skills}>
          {currientMode === LanguageMode.English
            ? project.skills
            : project.ruSkils}
        </p>
        <p className={styles.project_details__text}>
          {currientMode === LanguageMode.English
            ? project.description
            : project.ruDescription}
        </p>
      </div>

      <div className={styles.project_details__buttons}>
        <BtnGoTo
          linkToResourse={project.deploymentLink}
          icon={netlifyIcon}
          alt={'кнопка перехода к деплою'}
        >
          Deployment
        </BtnGoTo>
        <BtnGoTo
          linkToResourse={project.gitHubRepoLink}
          icon={gitHubIcon}
          alt={'кнопка перехода к репозиторию'}
        >
          GH Repo
        </BtnGoTo>
      </div>
    </main>
  );
});

export default ProjectPage;
