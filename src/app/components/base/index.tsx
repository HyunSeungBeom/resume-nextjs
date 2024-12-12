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

export const Divider = ({ className }: { className?: string }) => {
  return <div className={`w-full h-[1px] bg-slate-200 ${className} `} />;
};

export const Badge = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={`flex h-[20px] text-center items-center justify-center bg-gray400 text-white rounded-md px-1.5 py-1 text-xs font-bold ${className}`}
    >
      {text}
    </span>
  );
};

export const Title = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`text-purple500 text-[32px] md:text-[36px]  font-bold ${className}`}
    >
      {title}
    </div>
  );
};
