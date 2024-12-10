export interface ISkill {
  languages: IItem;
  frameworksLibraries: IItem;
  toolsIDEs: IItem;
}

interface IItem {
  title: string;
  skills: string[];
}

export const skill: ISkill = {
  languages: {
    title: 'Languages',
    skills: ['Javascript', 'Typescript', 'HTML/CSS', 'Dart'],
  },
  frameworksLibraries: {
    title: 'Frameworks & Librarys',
    skills: [
      'React.js',
      'Next.js',
      'Flutter',
      'Styled-components',
      'Tailwind css',
      'Recoil',
      'Redux',
      'Jotai',
      'Tanstack-Query',
    ],
  },
  toolsIDEs: {
    title: 'Tools & IDEs',
    skills: ['VS Code', 'ClickUp', 'Jira', 'GitHub', 'Git'],
  },
};
