import React from 'react';
import { InfoComponent } from './components/InfoComponent';
import { IntroduceComponent } from './components/IntroduceComponent';
import { SkillComponent } from './components/SkillComponent';
import { ExperienceComponent } from './components/ExperienceComponent';
import { EducationComponent } from './components/EducationComponent';
import { EtcComponent } from './components/EtcComponent';
import { CertificationComponent } from './components/CertificationComponent';
import FooterComponent from './components/FooterComponent';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full h-full py-20 px-52 font-sans gap-y-[70px]">
        <InfoComponent />
        <IntroduceComponent />
        <SkillComponent />
        <ExperienceComponent />
        <EducationComponent />
        <EtcComponent />
        <CertificationComponent />
      </div>
      <FooterComponent />
    </>
  );
}
