'use client'
import { Progress } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { CheckboxGroup, Checkbox } from "@nextui-org/react";

type Inputs = {
  ingredients: string;
  cookingStyle: string;
  diet: string;
};

export default function Home() {
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const ingredients = ['Tomatoes','Onions','Green Pepper','Rice','Potatoes','Galic','Ginger'  ]
  const cookingStyle = ['Oriental','Mediterranian','Western','African','South American']
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
    </main>
  );
}
