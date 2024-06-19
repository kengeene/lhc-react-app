"use client";
import { useEffect, useState } from "react";
import {
  CheckboxGroup,
  Checkbox,
  Input,
} from "@nextui-org/react";
import CustomSearch from '@/components/molecules/search-input'
import {OptionT} from '@/constants/types/components'


export default function CustomCheckboxGroup({ options, label }: { options: OptionT[]; label: string }) {
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
    <>
      <label>{label}</label>
      <CustomSearch value={search} onChange={setSearch} />
      <div className="max-h-48 overflow-y-auto mt-2">
        <CheckboxGroup>
          {filteredOptions.map((option: any, index: any) => (
            <Checkbox
              key={option.id ? `${option.id}` : index}
              value={option.id ? `${option.id}` : index}
            >
              {option.name ? option.name : option}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    </>
  );
}
