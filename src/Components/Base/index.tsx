import React from 'react';

interface CustomIconTextProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

export const CustomIconText = ({ icon, text, href }: CustomIconTextProps) => {
  const link = href || '';

  return (
    <p className="text-lg flex items-center">
      {icon}
      {link ? (
        <a href={link} className="ml-2 text-purple400" target="_blank">
          {text}
        </a>
      ) : (
        <span className="ml-2 text-purple400">{text}</span>
      )}
    </p>
  );
};
