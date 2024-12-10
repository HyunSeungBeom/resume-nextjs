export interface IEducation {
  list: {
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt?: string;
  }[];
}

const education: IEducation = {
  list: [
    {
      title: '대학교',
      subTitle: '컴퓨터공학과 졸업',
      startedAt: '2016-03',
      endedAt: '2022-02',
    },
    {
      title: '제주제일고등학교',
      subTitle: '자연계 졸업(제주도 제주시)',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
