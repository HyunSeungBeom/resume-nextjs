export interface IExperience {
  list: {
    company: string;
    startedAt: string;
    endedAt: string;
    positions: {
      title: string;
      startedAt: string;
      endedAt: string;
      descriptions: (
        | string
        | {
            main: string;
            sub: string[];
          }
      )[];
      skillKeywords: string[];
    }[];
  }[];
}

const experience: IExperience = {
  list: [
    {
      company: 'BPMG',
      startedAt: '2023-01',
      endedAt: '2024-11',
      positions: [
        {
          title: '테일즈런너 웹 프론트 개발',
          startedAt: '2024-08',
          endedAt: '2024-11',
          descriptions: [
            '게시판 페이지 (런너게시판, 창작게시판, 길드게시판, 토론게시판, 크리에이터신청) 유지보수',
            '운영 정책에 따른 유저 상태 변경 및 데이터 처리',
            '게시판 페이지에 대한 SEO 최적화',
            'React Router의 loader를 활용하여 백엔드에서 제공된 API를 통해 서비스의 유지보수 상태를 실시간으로 감지 및 처리 (점검)',
            {
              main: '이벤트 페이지 레이아웃화 및 개발',
              sub: [
                '반복적으로 진행되는 2주 단위 이벤트 페이지를 위한 공통 레이아웃 설계 및 구현',
                '이벤트별 요구사항에 따른 API 통신 및 비동기 데이터 처리 구현.',
              ],
            },
          ],
          skillKeywords: [
            'React.js',
            'JavaScript',
            'TailwindCSS',
            'SWR',
            'Git',
          ],
        },
        {
          title: '테일즈런너 어드민 프론트 개발',
          startedAt: '2024-01',
          endedAt: '2024-08',
          descriptions: [
            '전반적인 어드민 페이지 개발 및 유지보수',
            'CRUD 기능을 위한 공통 컴포넌트 설계 및 구현',
            'React-hook-form을 활용한 폼 유효성 검사 및 제출 처리',
            'Tanstack-Query를 활용한 데이터 관리 및 상태 업데이트',
          ],
          skillKeywords: [
            'React.js',
            'TypeScript',
            'TailwindCSS',
            'Tanstack-Query',
            'Jotai',
            'Git',
          ],
        },
        {
          title: 'Kmint 앱 프론트 개발',
          startedAt: '2023-06',
          endedAt: '2023-12',
          descriptions: [
            '튜토리얼 구현',
            '설정 페이지 구현',
            '공통 컴포넌트화 주 구현(modal, toast, bottom sheet, page layout)',
          ],
          skillKeywords: ['Flutter', 'Dart', 'Git'],
        },
        {
          title: 'PLWI 미니앱 프론트 개발',
          startedAt: '2023-02',
          endedAt: '2023-06',
          descriptions: [
            '회사 자체적으로 만든 프레임워크 Gemkit으로 개발',
            'Gemkit은 javascript로 작성된 프레임워크로, html/css와 비슷한 sbml/sbss를 사용하여 컴포넌트를 구성',
            '게임 상점 페이지로 블록체인 코인으로 게임 아이템을 구매 할 수 있도록 하는 앱서비스',
          ],
          skillKeywords: ['JavaScript', 'Git'],
        },
      ],
    },
  ],
};

export default experience;
