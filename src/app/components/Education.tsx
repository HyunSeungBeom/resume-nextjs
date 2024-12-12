import Payload from '@/payload';
import { Title } from './base';
import CommonList from './CommonList';

export const Education = () => {
  const { list } = Payload.education;

  return (
    <div className="mt-14">
      <Title title="EDUCATION" />
      <CommonList list={list} />
    </div>
  );
};
