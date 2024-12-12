import Payload from '@/payload';
import { Title, Divider } from './base';

export const Skill = () => {
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

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 my-10">
      <div className="w-full flex flex-col items-center md:flex-row md:items-start mb-2">
        <div className="w-full md:w-[200px] text-gray-400 font-semibold text-2xl mb-2 md:mb-0 md:mr-4 text-center md:text-left">
          {title}
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-500 px-4 py-2 rounded-lg shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
