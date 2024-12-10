import { Title, Divider } from '../../components/Base';
import Payload from '@/payload';

export const EducationComponent = () => {
  const { list } = Payload.education;

  return (
    <div className="mt-14">
      <Title title="EDUCATION" />
      {list.map((item, index) => {
        const last = list.length - 1;
        return (
          <div key={index} className="mt-4">
            <div className="flex gap-x-5">
              <div className="w-[300px] text-[24px] text-gray-500 font-semibold text-end">
                {item.startedAt} ~ {item.endedAt}
              </div>
              <div>
                <div className="text-[24px] font-semibold">{item.title}</div>
                <div className="text-[16px] text-gray-400 italic font-semibold">
                  {item.subTitle}
                </div>
              </div>
            </div>
            {last !== index && <Divider className="my-4" />}
          </div>
        );
      })}
    </div>
  );
};
