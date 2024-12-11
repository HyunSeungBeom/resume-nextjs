import { Divider, Title } from '@/components/base';
import SkillSection from '@/components/SkillSection';
import Payload from '@/payload';

export const SkillComponent = () => {
  const { languages, frameworksLibraries, toolsIDEs } = Payload.skill;

  return (
    <>
      <Title title="SKILL" />
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
