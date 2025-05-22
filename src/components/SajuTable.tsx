import { thText } from "@/data/dummyData";
import { SajuDataType, UserDataType } from "@/types/dataType";
import BoxTr from "./BoxTr";
import CommonTr from "./CommonTr";
import SajuWrapper from "./SajuWrapper";

type SajuTableType = {
  sajuData: SajuDataType[];
  userData: UserDataType;
};

const SajuTable = ({ sajuData, userData }: SajuTableType) => {
  return (
    <SajuWrapper>
      <div className="flex flex-col items-center gap-y-1 mt-[40px] text-font-title">
        <p className="text-[clamp(12px,4.2vw,18px)]">
          {userData.name}님의 사주
        </p>
        <p className="mt-[-4px] text-[clamp(14px,4.5vw,22px)] font-semibold tracking-widest">
          {userData.birth}
        </p>
      </div>
      <div className="mt-[30px] w-full px-[20px]">
        <table className="w-full">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "22.5%" }} />
            <col style={{ width: "22.5%" }} />
            <col style={{ width: "22.5%" }} />
            <col style={{ width: "22.5%" }} />
          </colgroup>
          <thead>
            <tr>
              {thText.map((th, i) => (
                <th
                  key={th}
                  className={`h-[45px] text-[20px] ${
                    i === 0 || i === 4 ? "border-r-1" : "border-r-[0.5px]"
                  }`}
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sajuData.map((saju, i) => {
              if (saju.thSubText === "(천간)" || saju.thSubText === "(지지)")
                return <BoxTr key={`boxtr-${i}`} data={saju} />;
              else return <CommonTr key={`commontr-${i}`} data={saju} />;
            })}
          </tbody>
        </table>
      </div>
    </SajuWrapper>
  );
};

export default SajuTable;
