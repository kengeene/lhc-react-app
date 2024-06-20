export type SearchInputT = {
  value: string;
  onChange: (e: string) => void;
  icon?: boolean;
};


export type OptionT = {
  name: string;
  id: string | number;
};

export type PreferencesT = {
  pantryIngredients: OptionT[];
  specialRequirements: OptionT[];
  cookingStyle: OptionT[];
};