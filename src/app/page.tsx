import React from 'react';
import Footer from './components/Footer';
import { Info } from './components/Info';
import { Introduce } from './components/Introduce';
import { Skill } from './components/Skill';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Etc } from './components/Etc';
import { Certification } from './components/Certification';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full h-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 font-sans gap-y-10">
        <Info />
        <Introduce />
        <Skill />
        <Experience />
        <Education />
        <Etc />
        <Certification />
      </div>
      <Footer />
    </>
  );
}
