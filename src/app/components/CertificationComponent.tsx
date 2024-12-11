import { Divider, Title } from '@/components/base';
import Payload from '@/payload';

export const CertificationComponent = () => {
  const { list } = Payload.certification;

  return (
    <div className="mt-14">
      <Title title="CERTIFICATION" />
      {list.map((item, index) => {
        const last = list.length - 1;
        return (
          <div key={index} className="mt-4">
            <div className="flex gap-x-5">
              <div className="w-[300px] text-[24px] text-gray-500 font-semibold text-end">
                {item.date}
              </div>
              <div>
                <div className="text-[24px] font-semibold">{item.title}</div>

                <div className="flex flex-col text-gray-400 text-[16px]  italic font-semibold">
                  <div>{item.subTitle}</div>
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
