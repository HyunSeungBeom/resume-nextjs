import Payload from '@/payload';
import { Title, Divider } from './base';
import CommonListComponent from './CommonListComponent';

export const EducationComponent = () => {
  const { list } = Payload.education;

  return (
    <div className="mt-14">
      <Title title="EDUCATION" />
      <CommonListComponent list={list} />
    </div>
  );
};
