'use client'
import { Progress } from "@nextui-org/react";
import { useState, useEffect } from "react";


export default function Home() {
  const [value, setValue] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Progress
        aria-label="Downloading..."
        size="md"
        value={value}
        color="success"
        showValueLabel={true}
        className="max-w-md"
      />
    </main>
  );
}
