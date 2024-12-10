import { Title } from '../../components/Base';
import Payload from '@/payload';

export const IntroduceComponent = () => {
  const { contents } = Payload.introduce;
  return (
    <div className="my-15">
      <div className="flex">
        <Title title="INTRODUCE" />
        <div className="ml-[70px] leading-7">
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
