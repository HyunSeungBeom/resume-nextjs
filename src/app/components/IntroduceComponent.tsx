import introduce from '@/payload/introduce';

export const IntroduceComponent = () => {
  const { contents } = introduce;
  return (
    <div className="my-15">
      <div className="flex">
        <div className="text-purple500 text-[36px] font-bold">INTRODUCE</div>
        <div className="ml-[70px] leading-7">
          {contents.map((content, index) => (
            <div key={index} className="mb-4">
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
