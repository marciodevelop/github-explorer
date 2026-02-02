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
  { value: "JavaScript", label: "JavaScript" },
  { value: "Go", label: "Go" },
  { value: "PHP", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Python", label: "Python" },
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
    <div className="flex gap-2 absolute top-3 md:static">
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
