export type TProjectProps = {
  title: string;
  imgS: string;
  imgXS: string;
};

export type TBtnGitHubProps = {
  link: string;
};

export type TProject = {
  title: string;
  ruTitle: string;
  skills: string;
  ruSkils: string;
  description: string;
  ruDescription: string;
  imgMic: string;
  imgSmall: string;
  imgBig: string;
  gitHubRepoLink: string;
  deploymentLink: string;
};

export const enum LanguageMode {
  English = 'en',
  Russian = 'ru'
}
