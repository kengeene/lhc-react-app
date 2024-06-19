"use client";
import { useEffect, useState } from "react";
import {
  CheckboxGroup,
  Checkbox,
  Input,
} from "@nextui-org/react";
import CustomSearch from '@/components/molecules/search-input'

type Option =  {
    name: string;
    id: string | number
}

export default function CustomCheckboxGroup({ options, label }: { options: Option[]; label: string }) {
 const [search, setSearch] = useState("");

  const [filteredOptions, setfilteredOptions] = useState(options);

  useEffect(() => {
    setfilteredOptions(
      options.filter((x: any) =>
        x.name
          ? x.name.toLowerCase().includes(search.toLowerCase())
          : x.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  return (
    <CheckboxGroup label={label}>
      <CustomSearch value={search} onChange={setSearch} />
      {filteredOptions.map((option: any, index: any) => (
        <Checkbox
          key={option.id ? `${option.id}` : index}
          value={option.id ? `${option.id}` : index}
        >
          {option.name ? option.name : option}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
