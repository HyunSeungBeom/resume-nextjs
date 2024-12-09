import { Divider } from '@/components/Base';
import SkillSection from '@/components/SkillSection';
import Payload from '@/payload';

export const SkillComponent = () => {
  const { languages, frameworksLibraries, toolsIDEs } = Payload.skill;

  return (
    <>
      <div className="text-purple500 text-[36px] font-bold">Skill</div>
      <SkillSection title={languages.title} skills={languages.skills} />
      <Divider />
      <SkillSection
        title={frameworksLibraries.title}
        skills={frameworksLibraries.skills}
      />
      <Divider />
      <SkillSection title={toolsIDEs.title} skills={toolsIDEs.skills} />
    </>
  );
};
