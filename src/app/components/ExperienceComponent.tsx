import { Badge } from '@/components/Base';
import Payload from '@/payload';

export const ExperienceComponent = () => {
  const { list } = Payload.experience;

  return (
    <div className="items-end relative mt-[100px]">
      <div className="flex items-end mb-5">
        <div className="text-purple500 text-[36px] font-bold leading-none relative">
          EXPERIENCE
        </div>
        <Badge text="총 1년 11개월" className="ml-2" />
      </div>
      {list.map((item, index) => (
        <div key={index}>
          <CompanyInfo
            startedAt={item.startedAt}
            endedAt={item.endedAt}
            company={item.company}
          />
          <div>
            {item.positions.map((position, positionIndex) => (
              <Position
                key={positionIndex}
                startedAt={position.startedAt}
                endedAt={position.endedAt}
                title={position.title}
                descriptions={position.descriptions}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const CompanyInfo = ({
  startedAt,
  endedAt,
  company,
}: {
  startedAt: string;
  endedAt: string;
  company: string;
}) => (
  <div className="flex items-center">
    <span className="w-[250px] px-4 text-end text-[24px]">
      {startedAt} ~ {endedAt}
    </span>
    <span className="ml-2 text-center font-bold text-[28px]">{company}</span>
  </div>
);

const Position = ({
  startedAt,
  endedAt,
  title,
  descriptions,
}: {
  startedAt: string;
  endedAt: string;
  title: string;
  descriptions: (string | { main: string; sub: string[] })[];
}) => (
  <div className="my-4">
    <div className="flex">
      <span className="w-[250px] p-4 text-gray-500 text-end text-[16px]">
        {startedAt} ~ {endedAt}
      </span>
      <span className="flex text-[18px] text-gray-600 font-bold items-center italic">
        {title}
      </span>
    </div>
    <Descriptions descriptions={descriptions} />
  </div>
);

const Descriptions = ({
  descriptions,
}: {
  descriptions: (string | { main: string; sub: string[] })[];
}) => (
  <>
    {descriptions.map((description, index) => (
      <div key={index} className="ml-[250px] mt-2 text-[16px]">
        {typeof description === 'string' ? (
          <li>{description}</li>
        ) : (
          <div>
            <li>{description.main}</li>
            <div className="mt-2">
              {description.sub.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="mt-2 px-8"
                  style={{ listStyleType: 'circle' }}
                >
                  {subItem}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </>
);
