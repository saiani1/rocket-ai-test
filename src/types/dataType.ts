export type UserDataType = {
  name: string;
  birth: string;
};

export type SajuDataType = {
  thText: string;
  thSubText: string;
  rows: SajuRowType[] | SajuBoxRowType[];
};

export type SajuRowType = {
  tdText: string | string[];
  tdSubText: string | string[];
};

export type SajuBoxRowType = {
  tdText1: string;
  tdText2: string;
  tdText3: string;
};
