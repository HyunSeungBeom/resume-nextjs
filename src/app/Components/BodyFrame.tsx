export const BodyFrame = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex ${className}`}>
      <div className="text-purple500 text-[36px] font-bold">{title}</div>
      {children}
    </div>
  );
};
