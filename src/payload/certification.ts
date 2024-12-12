export interface ICertification {
  list: {
    title: string;
    subTitle: string;
    startedAt: string;
  }[];
}

const certification: ICertification = {
  list: [
    {
      title: '정보처리기사',
      subTitle: '한국산업인력공단',
      startedAt: '2021-11-26',
    },
  ],
};

export default certification;
