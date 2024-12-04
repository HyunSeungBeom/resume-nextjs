import React from 'react';

interface CustomIconTextProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  link?: boolean;
}

export const CustomIconText = ({
  icon,
  text,
  href = '',
  link = true,
}: CustomIconTextProps) => {
  return (
    <p className="text-lg flex items-center">
      {icon}
      {link ? (
        <a
          href={href}
          className="ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <span className="ml-2">{text}</span>
      )}
    </p>
  );
};
