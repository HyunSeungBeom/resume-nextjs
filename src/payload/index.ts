import certification, { ICertification } from './certification';
import education, { IEducation } from './education';
import etc, { IEtc } from './etc';
import experience, { IExperience } from './experience';
import info, { IInfo } from './info';
import introduce, { IIntroduce } from './introduce';
import { ISkill, skill } from './skill';

const Payload: IPayload = {
  introduce,
  skill,
  experience,
  info,
  education,
  certification,
  etc,
};

interface IPayload {
  introduce: IIntroduce;
  skill: ISkill;
  experience: IExperience;
  info: IInfo;
  education: IEducation;
  certification: ICertification;
  etc: IEtc;
}

export default Payload;
