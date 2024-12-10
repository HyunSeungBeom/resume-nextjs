import React from 'react';
import { InfoComponent } from './components/InfoComponent';
import { IntroduceComponent } from './components/IntroduceComponent';
import { SkillComponent } from './components/SkillComponent';
import { ExperienceComponent } from './components/ExperienceComponent';

export default function Page() {
  return (
    <div className="w-full h-full py-20 px-52 font-sans">
      <InfoComponent />
      <IntroduceComponent />
      <SkillComponent />
      <ExperienceComponent />
      {/* <EducationComponent /> */}
      {/* <ETCComponent /> */}
    </div>
  );
}
