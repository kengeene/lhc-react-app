"use client";
import { Progress } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { fetchRecipie } from "@/api/ai";
import { Listbox, ListboxItem } from "@nextui-org/react";
import CookingPreferences from "@/components/organisims/cooking-preferences";
import CustomButton from "@/components/atoms/Button";

type Inputs = {
  ingredients: string;
  cookingStyle: string;
  diet: string;
};

type Recipie = {
  recipeName: string;
  ingredients: [
    {
      name: string;
      quantity: string;
      form: string;
    }
  ];
  instructions: [];
};

export default function Page() {

  const [possibleRecipes, setPossibleRecipes] = useState<Recipie[]>([]);

  const [preferences, setPreferences] = useState({
    pantryIngredients: [],
    specialRequirements: [],
    cookingStyle: [],
  });

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    console.log("preferences", preferences);
  }, [preferences]);

  const onSubmit= async (data: any) => {
    setLoading(true);
    const payload = Object.entries(data)
      .filter(([key, value]) => value.length !== 0)
      .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
    try {
      const { data } = await fetchRecipie({ payload });
      const recipes = JSON.parse(data.choices[0].message.content);
      console.log("recipes", recipes);
      setPossibleRecipes(recipes.recipes);
      console.log("possibleRecipes", possibleRecipes);
    } catch (error) {
      console.log("error", error);
    } finally{
      setLoading(false);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid-cols-2">
        <CookingPreferences
          onChange={(data) => setPreferences({ ...preferences, ...data })}
        />
      </div>

      <div className="grid-cols-1 w-full">
        <CustomButton
          className="w-full my-4"
          onClick={() => onSubmit(preferences)}
          loading={loading}
        >
          Submit
        </CustomButton>
      </div>

      <div className="grid-cols-1">
        {possibleRecipes.map((recipe: Recipie, index) => (
          <div className="my-10" key={index}>
            <h1 className="my-3">{recipe.recipeName}</h1>
            <h2>Ingredients</h2>
            <Listbox>
              {recipe.ingredients.map((ingredient, index) => (
                <ListboxItem key={index}>
                  {ingredient.quantity} {ingredient.form} {ingredient.name}
                </ListboxItem>
              ))}
            </Listbox>
            <h2 className="my-3">Instructions</h2>
            <Listbox>
              {recipe.instructions.map((step, index) => (
                <ListboxItem key={index}>{step}</ListboxItem>
              ))}
            </Listbox>
          </div>
        ))}
      </div>
    </main>
  );
}
