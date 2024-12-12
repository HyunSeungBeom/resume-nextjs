import Payload from '@/payload';
import { Title } from './base';
import CommonList from './CommonList';

export const Etc = () => {
  const { list } = Payload.etc;

  return (
    <div className="mt-14">
      <Title title="ETC" />
      <CommonList list={list} />
    </div>
  );
};
