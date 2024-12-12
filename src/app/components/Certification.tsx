import Payload from '@/payload';
import { Title } from './base';
import CommonList from './CommonList';

export const Certification = () => {
  const { list } = Payload.certification;

  return (
    <div className="mt-14">
      <Title title="CERTIFICATION" />
      <CommonList list={list} />
    </div>
  );
};
