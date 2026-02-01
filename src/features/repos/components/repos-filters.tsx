"use client";

import { OptionsType } from "../types";
import { useCallback } from "react";
import { filtersStore } from "@/store/filters-store";
import { CustomCombobox } from "@/components/ui/custom-combobox";

const typeOptions = [
  { value: "all", label: "All" },
  { value: "forks", label: "Forks" },
  { value: "sources", label: "Sources" },
  { value: "archived", label: "Archived" },
  { value: "mirrors", label: "Mirrors" },
];

const languageOptions = [
  { value: "js", label: "JavaScript" },
  { value: "go", label: "Go" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "ts", label: "TypeScript" },
  { value: "c", label: "C" },
];

export function ReposFilters() {
  const { setTypes, setLanguages } = filtersStore();

  const handleTypeChange = useCallback((items: OptionsType[]) => {
    setTypes(items.map(({ value }) => String(value)))
  }, [setTypes])

  const handleLanguageChange = useCallback((items: OptionsType[]) => {
    setLanguages(items.map(({ value }) => String(value)))
  }, [setLanguages])

  return (
    <div className="flex gap-2">
      <CustomCombobox
        placeholder="Type"
        options={typeOptions}
        onSelectedOptions={handleTypeChange}
      />
      <CustomCombobox
        placeholder="Language"
        options={languageOptions}
        onSelectedOptions={handleLanguageChange}
      />
    </div>
  );
}
