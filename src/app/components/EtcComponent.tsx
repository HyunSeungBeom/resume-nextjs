import Payload from '@/payload';
import { FaGithub } from 'react-icons/fa';
import { Title, Divider } from './base';
import CommonListComponent from './CommonListComponent';

export const EtcComponent = () => {
  const { list } = Payload.etc;

  return (
    <div className="mt-14">
      <Title title="ETC" />
      <CommonListComponent list={list} />
    </div>
  );
};
