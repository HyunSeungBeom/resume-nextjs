import experience, { IExperience } from './experience';
import info, { IInfo } from './info';
import introduce, { IIntroduce } from './introduce';
import { ISkill, skill } from './skill';

const Payload: Payload = {
  introduce,
  skill,
  experience,
  info,
};

interface Payload {
  introduce: IIntroduce;
  skill: ISkill;
  experience: IExperience;
  info: IInfo;
}

export default Payload;
