import { SajuDataType, SajuRowType } from "../types/dataType";
import CommonTh from "./CommonTh";

type CommonTrType = {
  data: SajuDataType;
};

const CommonTr = ({ data }: CommonTrType) => {
  return (
    <tr className="border-y-1">
      <CommonTh thText={data.thText} thSubText={data.thSubText} />
      {(data.rows as SajuRowType[]).map((item, i) => (
        <td
          key={`commontd-${i}`}
          className={`py-2 bg-white ${
            i === 3 ? "border-r-1" : "border-r-[0.5px]"
          }`}
        >
          <div className="flex flex-col gap-y-1">
            {Array.isArray(item.tdText) ? (
              item.tdText.map((text, idx) => (
                <div
                  key={`tdText-${idx}`}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="text-[14.5px]">{text}</span>
                  <span className="mt-[-3px] text-[10px]">
                    {item.tdSubText[idx]}
                  </span>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center">
                <span className="text-[14.5px]">{item.tdText}</span>
                <span className="mt-[-3px] text-[10px]">{item.tdSubText}</span>
              </div>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default CommonTr;
