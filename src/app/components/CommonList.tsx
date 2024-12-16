import { Divider } from './base';
import Link from 'next/link';

interface ICommonList {
  startedAt: string;
  endedAt?: string;
  title?: string;
  subTitle?: string;
  link?: string;
}

const CommonList = ({ list }: { list: ICommonList[] }) => (
  <>
    {list.map((item, index) => {
      const last = list.length - 1;
      return (
        <div key={index} className="mt-4">
          <div className="flex flex-col md:flex-row gap-x-5">
            <div className="min-w-[240px] text-[24px] text-gray-500 font-semibold md:text-end">
              {item.startedAt} {item.endedAt && `~ ${item.endedAt}`}
            </div>
            <div className="flex-grow mt-2 md:mt-0">
              <div className="text-[24px] font-semibold">{item.title}</div>
              <div className="flex flex-col text-gray-400 text-[16px] italic font-semibold">
                <div>{item.subTitle}</div>
                {item.link && (
                  <div className="flex items-center gap-1 text-blue200">
                    <Link href={item.link} target="_blank">
                      {item.link}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {last !== index && <Divider className="my-4" />}
        </div>
      );
    })}
  </>
);

export default CommonList;
