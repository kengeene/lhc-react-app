import {create} from 'zustand';
import {PreferencesT} from '@/constants/types/components'

type State = {
  preferences: PreferencesT;
};

// type Actions = {
//   addPantryIngrdients: (item: number) => void;
//   addCookingStyle: (qty: number) => void;
//   addSpecialRequirements: (qty: number) => void;
// };
// const useStore = create<State & Actions>((set) => ({
  const useRecipiesStore = create<State>((set) => ({
      preferences: {
        pantryIngredients: [],
        specialRequirements: [],
        cookingStyle: [],
      },
    //   addPantryIngrdients: () =>
    //     set((item: number) => (state) => ({
    //       preferences: state.preferences.pantryIngredients.push(item),
    //     })),
    //   addSpecialRequirements: () => set({ bears: 0 }),
    //   addCookingStyle: (newBears) => set({ bears: newBears }),
    }));


    export default useRecipiesStore;