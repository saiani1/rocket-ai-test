type SajuWrapperType = {
  children: React.ReactNode;
};

const SajuWrapper = ({ children }: SajuWrapperType) => {
  return (
    <div className="relative flex flex-col items-center mt-[-30px] mx-[10px] pb-[40px] border-3 border-line-black z-200 bg-background-beige">
      <div className="absolute top-0 w-full h-[8px] border-b-1 border-line-navy" />
      <div className="absolute top-0 left-0 h-full w-[8px] border-r-1 border-line-navy" />
      <div className="absolute top-0 right-0 h-full w-[8px] border-l-1 border-line-navy" />
      <div className="absolute bottom-0 w-full h-[8px] border-t-1 border-line-navy" />
      <div className="absolute top-[30px] flex justify-between w-full">
        <img
          src="/saju-left-img.png"
          className="absolute left-[10px] top-[25px]"
        />
        <img src="/saju-right-img.png" className="absolute right-[10px]" />
      </div>
      {children}
    </div>
  );
};

export default SajuWrapper;
