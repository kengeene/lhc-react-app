import {
  pantryIngredients,
  specialRequirements,
  cookingStyle,
} from "@/constants/preferences";
import CustomCheckboxGroup from "@/components/molecules/checkbox-group";

export default function CookingPreferences() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <CustomCheckboxGroup
          options={pantryIngredients}
          label="My Pantry Ingredients"
        />
      </div>
      <div>
        <CustomCheckboxGroup
          options={specialRequirements}
          label="My Food preferences"
        />
      </div>
      <div>
        <CustomCheckboxGroup
          options={cookingStyle}
          label="My prefered cooking style"
        />
      </div>
    </div>
  );
}
