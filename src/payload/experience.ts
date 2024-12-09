export interface IExperience {
  list: {
    title: string;
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
      title: 'BPMG',
      positions: [
        {
          title: '테일즈런너 웹 개발',
          startedAt: '2024-08',
          endedAt: '2024-11',
          descriptions: [
            '게시판 페이지 (런너게시판, 창작게시판, 길드게시판, 토론게시판, 크리에이터신청) 유지보수',
            '게시판 운영 정책 관리',
            '로그인시 유저 제재 알림 모달 구현',
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
          title: '테일즈런너 어드민 개발',
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
          title: 'Kmint 앱 개발',
          startedAt: '2023-06',
          endedAt: '2023-12',
          descriptions: ['튜토리얼 구현', '설정 페이지 구현'],
          skillKeywords: ['Flutter', 'Dart', 'Git'],
        },
      ],
    },
  ],
};

export default experience;
