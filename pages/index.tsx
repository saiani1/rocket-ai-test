import SajuTable from "@/components/SajuTable";
import { backgroundText, sajuText, userData } from "@/data/dummyData";

const Home = () => {
  return (
    <div className="relative pb-[80px] max-w-md h-max bg-[#f3f2ef] overflow-hidden">
      <div className="relative h-[677px] overflow-hidden">
        <div className="absolute ml-[-10px] mt-[-10px] w-[calc(100%+20px)] h-full bg-linear-to-b from-gradient-start to-gradient-end blur-[10px]" />
        <div className="absolute w-full h-[261px] bg-gradient-to-b from-black to-black/0 z-200" />
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-white/10 text-[3.75rem] leading-[1.5] tracking-[0.8rem] whitespace-pre blur-[3.5px] z-100">
          <p>{backgroundText}</p>
        </div>
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 flex flex-col gap-y-2 z-200">
          <h1 className="text-white text-center text-[1.25rem]">제 1장</h1>
          <img src="/title-line.png" />
          <h2 className="text-white text-center text-[1.25rem]">
            나의 사주팔자
          </h2>
        </div>
        <img
          src="/woman.png"
          className="absolute bottom-0 right-0 w-[300px] z-200"
        />
        <div>
          <img
            src="/background-gradient1.png"
            className="absolute bottom-[-100px] left-[-20px] w-[345.65px] h-[336.32] z-1"
          />
          <img
            src="/background-gradient2.png"
            className="absolute bottom-[15px] right-0 w-[418px] h-[313px]"
          />
        </div>
        <div className="absolute bottom-[-10px] w-full h-[200px] bg-gradient-to-b from-gradient-bottom/0 to-gradient-bottom z-300" />
      </div>
      <div className="relative">
        <div className="absolute top-[-50px] z-300">
          <img src="/text-ballon-bottom.png" className="w-[250px]" />
          <p className="absolute bottom-[45px] left-[50px] text-center">
            이제 본격적으로
            <br />
            {userData.name}님의 사주팔자를
            <br />
            분석해볼 차례네요.
          </p>
        </div>
        <div className="flex justify-between pt-[100px]">
          <img
            src="/middle-left-img.png"
            className="mt-[140px] w-153px h-[120px]"
          />
          <div className="absolute right-[110px] flex text-[40px]">
            <p className="skew-x-[-15] rotate-[-10deg] text-shadow-outline">
              슥
            </p>
            <p className="mt-[-2px] skew-x-[-15] rotate-[-10deg] text-shadow-outline">
              슥
            </p>
          </div>
          <img src="/middle-right-img.jpg" className="pr-[20px]" />
        </div>
      </div>
      <div className="relative mt-[40px]">
        <div className="relative">
          <img src="/text-ballon-top.png" className="absolute top-[-120px]" />
          <p className="absolute bottom-[18px] left-[55px] text-center">
            제가 {userData.name}님의 사주를
            <br />
            보기 쉽게 표로 정리했어요.
          </p>
        </div>
        <img src="/bottom-full-img.png" className="w-full" />
        <div className="absolute bottom-0 w-full h-[118px] bg-gradient-to-b from-gradient-bottom/0 to-gradient-bottom z-200" />
      </div>
      <SajuTable sajuData={sajuText} userData={userData} />
    </div>
  );
};

export default Home;
