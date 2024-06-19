'use client'
import CustomSearch from '@/components/molecules/search-input';
import TodaysMenu from '@/components/organisims/todays-menu';
import CookingPreferences from "@/components/organisims/cooking-preferences";
import FeaturedRecipies from '@/components/organisims/featured-recipies';
import { useEffect, useState } from "react";
export default function Home() {

  const [search, setSearch] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Search for available recipies</h1>
      <div className="grid grid-cols-1 my-4">
        <CustomSearch value={search} onChange={setSearch} icon={false} />
      </div>
      <CookingPreferences />
      <h1 className="my-4">Todays Menu</h1>
      <TodaysMenu />
      <h1 className="my-4">Featured recipies</h1>
      <FeaturedRecipies />
    </main>
  );
}
