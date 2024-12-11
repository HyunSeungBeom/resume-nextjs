import Payload from '@/payload';
import { Title, Divider } from './base';

export const SkillComponent = () => {
  const { languages, frameworksLibraries, toolsIDEs } = Payload.skill;

  return (
    <div className="relative">
      <Title title="SKILL" />
      <SkillSection title={languages.title} skills={languages.skills} />
      <Divider />
      <SkillSection
        title={frameworksLibraries.title}
        skills={frameworksLibraries.skills}
      />
      <Divider />
      <SkillSection title={toolsIDEs.title} skills={toolsIDEs.skills} />
    </div>
  );
};

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
  return (
    <div className="flex justify-center items-center px-20 my-10">
      <div className="w-[200px] text-gray-400 font-semibold text-[24px] mb-2">
        {title}
      </div>
      <div className="w-full grid grid-cols-3 gap-x-10 gap-y-2 ml-5  p-4">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>
    </div>
  );
};
