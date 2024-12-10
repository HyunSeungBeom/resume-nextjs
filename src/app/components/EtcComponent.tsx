import { Divider, Title } from '../../components/Base';
import Payload from '@/payload';
import { FaGithub } from 'react-icons/fa';

export const EtcComponent = () => {
  const { list } = Payload.etc;

  return (
    <div className="mt-14">
      <Title title="ETC" />
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

                <div className="flex flex-col text-gray-400 text-[16px]  italic font-semibold">
                  <div>{item.subTitle}</div>
                  {item.link && (
                    <div className="flex items-center gap-1">
                      <FaGithub className="w-5 h-5" />
                      <a href={item.link} target="_blank">
                        {item.link}
                      </a>
                    </div>
                  )}
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
