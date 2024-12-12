import Payload from '@/payload';
import { Title } from './base';

export const Introduce = () => {
  const { contents } = Payload.introduce;

  return (
    <div className="my-15">
      <div className="flex flex-col md:flex-row">
        <Title title="INTRODUCE" />
        <div className="mt-4 md:ml-[70px] leading-7">
          {contents.map((content, index) => (
            <div key={index} className="mb-4">
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
