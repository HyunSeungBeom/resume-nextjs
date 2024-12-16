import React from 'react';
import Link from 'next/link';

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
        <Link href={link} className="ml-2 text-blue300" target="_blank">
          {text}
        </Link>
      ) : (
        <span className="ml-2 text-blue300">{text}</span>
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
      className={`text-blue300 text-[32px] md:text-[36px]  font-medium ${className}`}
    >
      {title}
    </div>
  );
};
