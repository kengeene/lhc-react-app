"use client";
import { Progress } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { fetchRecipie } from "@/api/ai";
import { Listbox, ListboxItem } from "@nextui-org/react";

type Inputs = {
  ingredients: string;
  cookingStyle: string;
  diet: string;
};

type Recipie = {
  recipe_name: string;
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [possibleRecipes, setPossibleRecipes] = useState<Recipie[]>([]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload: Inputs = data;
    try {
      const { data } = await fetchRecipie({ payload });
      const recipes = JSON.parse(data.choices[0].message.content);
      console.log("recipes", recipes);
      setPossibleRecipes(recipes.recipes);
      console.log("possibleRecipes", possibleRecipes);
    } catch (error) {
      console.log("error", error);
    }
  };

  const ingredients = [
    "Tomatoes",
    "Onions",
    "Green Pepper",
    "Rice",
    "Potatoes",
    "Galic",
    "Ginger",
  ];
  const cookingStyle = [
    "Oriental",
    "Mediterranian",
    "Western",
    "African",
    "South American",
  ];
  const dietType = ["No preferences", "Vegetetrian", "Keto", "Dairy Free"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CheckboxGroup label="Select Ingredients">
            {ingredients.map((ingredient) => (
              <Checkbox
                value={ingredient}
                key={ingredient}
                {...register("ingredients")}
              >
                {ingredient}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <CheckboxGroup label="Select Cooking Style">
            {cookingStyle.map((style) => (
              <Checkbox value={style} key={style} {...register("cookingStyle")}>
                {style}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <CheckboxGroup label="Select Dietary Preferences">
            {dietType.map((diet) => (
              <Checkbox value={diet} key={diet} {...register("diet")}>
                {diet}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="recipes">
        {possibleRecipes.map((recipe: Recipie, index) => (
          <div className="my-10" key={index}>
            <h1 className="my-3">{recipe.recipe_name}</h1>
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
