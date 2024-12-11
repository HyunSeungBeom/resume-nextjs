'use client';

import { useEffect, useState } from 'react';
import Payload from '@/payload';
import { Title, Badge, Divider } from './base';

export const ExperienceComponent = () => {
  const { list } = Payload.experience;
  const [totalExperience, setTotalExperience] = useState<string>('');

  const calculateTotalExperience = (
    list: { startedAt: string; endedAt: string }[]
  ) => {
    let totalMonths = 0;

    list.forEach(({ startedAt, endedAt }) => {
      const [startYear, startMonth] = startedAt.split('-').map(Number);
      const [endYear, endMonth] = endedAt.split('-').map(Number);

      totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth);
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `총 ${years}년 ${months}개월`;
  };

  useEffect(() => {
    const experience = calculateTotalExperience(list);
    setTotalExperience(experience);
  }, [list]);

  return (
    <div className="items-end relative mt-14">
      <div className="flex items-end">
        <Title title="EXPERIENCE" className="leading-none relative" />
        <Badge text={totalExperience} className="ml-2" />
      </div>
      {list.map((item, index) => {
        const last = list.length - 1;

        return (
          <div key={index} className="mt-5">
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
            {last !== index && <Divider className="my-4" />}
          </div>
        );
      })}
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
    <span className="w-[300px] px-4 text-end text-[24px] text-gray-500 font-semibold">
      {startedAt} ~ {endedAt}
    </span>
    <span className="font-semibold text-[24px]">{company}</span>
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
  <div className="">
    <div className="flex">
      <span className="w-[300px] p-4 text-gray-500 text-end font-semibold text-[16px]">
        {startedAt} ~ {endedAt}
      </span>
      <span className="flex text-[16px] text-gray-400 font-semibold items-center italic">
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
  <div className="flex flex-col gap-y-3">
    {descriptions.map((description, index) => (
      <div key={index} className="ml-[300px] text-[16px]">
        {typeof description === 'string' ? (
          <li>{description}</li>
        ) : (
          <div>
            <li>{description.main}</li>
            <div className="flex flex-col gap-y-3 mt-2">
              {description.sub.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="px-8"
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
  </div>
);
