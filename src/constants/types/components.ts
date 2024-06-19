export type SearchInputT = {
  value: string;
  onChange: (e: string) => void;
  icon?: boolean;
};


export type OptionT = {
  name: string;
  id: string | number;
};