import {
  pantryIngredients,
  specialRequirements,
  cookingStyle,
} from "@/constants/preferences";
import CustomCheckboxGroup from "@/components/molecules/checkbox-group";

export default function CookingPreferences({ onChange }: { onChange: (data: any) => void }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <CustomCheckboxGroup
          options={pantryIngredients}
          label="My Pantry Ingredients"
          onChange={(data) => onChange({ pantryIngredients: data })}
        />
      </div>
      <div>
        <CustomCheckboxGroup
          options={specialRequirements}
          label="My Food preferences"
          onChange={(data) => onChange({ specialRequirements: data })}
        />
      </div>
      <div>
        <CustomCheckboxGroup
          options={cookingStyle}
          label="My prefered cooking style"
          onChange={(data) => onChange({ cookingStyle: data })}
        />
      </div>
    </div>
  );
}
