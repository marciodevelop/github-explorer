"use client";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxInput,
} from "@/components/ui/combobox";
import { Checkbox } from "./checkbox";
import { ChevronDown } from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";
import { OptionsType } from "@/features/repos/types";
import { cn } from "@/lib/utils";

interface ICustomComboboxProps {
  options: OptionsType[];
  placeholder: string;
  onSelectedOptions: (params: OptionsType[]) => void;
}

export function CustomCombobox(
  props: ICustomComboboxProps & ComponentProps<"button">,
) {
  const {
    placeholder = "Selecione",
    onSelectedOptions,
    options,
    className,
  } = props;
  const [selectedOptions, setSelectedOptions] = useState<OptionsType[] | []>(
    [],
  );

  const getlabel = () => {
    if (selectedOptions.length === 0) return placeholder;
    if (selectedOptions.length === 1) {
      return selectedOptions[0].label;
    }
    return `${selectedOptions.length} itens`;
  };

  const handleSelectOptions = (option: OptionsType, isChecked: boolean) => {
    setSelectedOptions((prev) => {
      if (isChecked) {
        return [...prev, option];
      }
      return prev.filter(({ value }) => value !== option.value);
    });
  };

  useEffect(() => {
    if (onSelectedOptions) {
      onSelectedOptions(selectedOptions);
    }
  }, [selectedOptions, onSelectedOptions]);

  return (
    <Combobox items={options} multiple>
      <ComboboxTrigger
        render={
          <button
            type="button"
            className={cn(
              "text-sm min-w-22 max-w-40 flex items-center px-4 text-white rounded-[42px] gap-2.5 p-2 bg-linear-to-r from-[#0056A6] to-[#0587FF]",
              className,
            )}
          >
            <ChevronDown className="shrink-0" size={16} />
            <span>{getlabel()}</span>
          </button>
        }
      />
      <ComboboxContent>
        <ComboboxInput
          showTrigger={false}
          placeholder="Search"
          className="hidden"
        />
        <ComboboxEmpty>Nenhum item</ComboboxEmpty>
        <ComboboxList className="flex flex-col gap-2 py-3 px-4">
          {(item) => (
            <label
              htmlFor={`label-${item.value}`}
              className="flex justify-start items-center gap-3 text-base"
              key={item.value}
            >
              <Checkbox
                id={`label-${item.value}`}
                checked={selectedOptions.some(
                  ({ value }) => value === item.value,
                )}
                onCheckedChange={(checked) =>
                  handleSelectOptions(item, Boolean(checked))
                }
              />
              {item.label}
            </label>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
