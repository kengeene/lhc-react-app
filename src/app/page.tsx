'use client'
import CustomCheckboxGroup from "@/components/molecules/checkbox-group";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  CheckboxGroup,
  Checkbox,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import CustomSearch from '@/components/molecules/search-input';
import { pantryIngredients, specialRequirements, cookingStyle } from "@/constants/preferences";

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 my-4">
        <h1>Search for available recipies</h1>
        <CustomSearch value={search} onChange={setSearch} icon={false} />
      </div>
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
      <div>
        <h2>Todays Menu</h2>
      </div>
      <h1 className="my-4">Featured recipies</h1>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
        </Card>
      </div>
    </main>
  );
}
