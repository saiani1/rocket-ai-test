type CommonThType = {
  thText: string;
  thSubText: string;
};

const CommonTh = ({ thText, thSubText }: CommonThType) => {
  return (
    <th className="border-r-1">
      <div className="flex flex-col">
        <span className="text-[12px]">{thText}</span>
        <span className="text-[8px]">{thSubText}</span>
      </div>
    </th>
  );
};

export default CommonTh;
