import { Input } from "../ui/input";
import { Search } from "lucide-react";
import type { ComponentProps } from "react";
import { filtersStore } from "@/store/filters-store";

export function ReposSearchInput(props: ComponentProps<"input">) {
  const { search, setSearch } = filtersStore();

  return (
    <div className="w-full flex justify-between items-center">
      <div className="relative text-[#989898]">
        <Search className="absolute top-2.5 left-1 size-4" />
        <Input
          value={search}
          onChange={(param) => setSearch(param.target.value)}
          className="border-0 rounded-none border-b pl-8 focus-visible:ring-0 focus-visible:border-gray-900 transition text-gray-900"
          placeholder="Search here"
          {...props}
        />
      </div>
    </div>
  );
}
