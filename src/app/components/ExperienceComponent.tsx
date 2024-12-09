import { Badge, Divider } from '@/components/Base';
import Payload from '@/payload';

export const ExperienceComponent = () => {
  const { list } = Payload.experience;

  return (
    <div className=" items-end relative mt-[100px]">
      <div className="flex items-end">
        <div className="text-purple500 text-[36px] font-bold leading-none relative">
          EXPERIENCE
        </div>
        <Badge text="총 1년 11개월" className="ml-2" />
      </div>
      {list.map((item, index) => {
        const positions = item.positions[index];

        return (
          <div key={index}>
            <div className="flex">
              {positions.startedAt} ~ {positions.endedAt}
            </div>
          </div>
        );
      })}
    </div>
  );
};
