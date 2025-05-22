import { SajuBoxRowType, SajuDataType } from "@/types/dataType";
import CommonTh from "./CommonTh";

type BoxTrType = {
  data: SajuDataType;
};

const BoxTr = ({ data }: BoxTrType) => {
  const backgroundColor = (text: string) => {
    let color = "";
    switch (text) {
      case "정":
      case "사":
        color = "bg-background-red text-white";
        break;
      case "인":
        color = "bg-background-turquoise text-white";
        break;
      case "유":
        color = "border-1 text-black";
        break;
      default:
        color = "bg-background-black text-white";
    }
    return color;
  };

  return (
    <tr className="border-b-[0.5px]">
      <CommonTh thText={data.thText} thSubText={data.thSubText} />
      {(data.rows as SajuBoxRowType[]).map((item, i) => (
        <td
          key={`boxtd-${i}`}
          className={`p-[5px] bg-white ${
            i === 3 ? "border-r-1" : "border-r-[0.5px]"
          }`}
        >
          <div className="w-full flex justify-center">
            <div
              className={`relative flex flex-col justify-center items-center w-full aspect-square ${backgroundColor(
                item.tdText1
              )} rounded-[12.5px]`}
            >
              <span className="text-[clamp(6px,2vw,10px)]">{item.tdText1}</span>
              <span className="mt-[-6px] mb-[-4px] text-[clamp(14px,6.5vw,34px)]">
                {item.tdText2}
              </span>
              <span className="text-[clamp(6px,2vw,10px)]">{item.tdText3}</span>
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default BoxTr;
