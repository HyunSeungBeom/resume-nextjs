export interface IEtc {
  list: {
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt?: string;
    link?: string;
  }[];
}

const etc: IEtc = {
  list: [
    {
      title: '원티드 프리온보딩 프론트엔드(React) 6차 수료',
      subTitle: '팀프로젝트 단위로 7개의 미니 프로젝트 (1주일에 하나씩 진행)',
      startedAt: '2022-10',
      endedAt: '2022-11',
      link: 'https://github.com/orgs/wanted-team-11/repositories',
    },
    {
      title: '스파르타 항해 BootCamp(React) 7기 수료',
      subTitle: 'WebRTC 기반의 실시간 영상 채팅 서비스 개발 (STUPY)',
      startedAt: '2022-05',
      endedAt: '2022-09',
    },
    {
      title: '육군 병장 만기 전역',
      subTitle: '통신병',
      startedAt: '2017-09',
      endedAt: '2019-05',
    },
  ],
};

export default etc;
