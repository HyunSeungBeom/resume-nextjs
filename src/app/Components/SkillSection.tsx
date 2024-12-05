import React from 'react';

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
      <div className="w-full flex flex-wrap gap-x-10 text-[16px] justify-between text-start gap-y-2 ml-5">
        {skills.map((skill, index) => (
          <li key={index} className="w-1/4">
            {skill}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
