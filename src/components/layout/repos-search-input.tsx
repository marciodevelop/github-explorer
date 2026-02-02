import { Search } from "lucide-react";
import type { ComponentProps } from "react";
import { filtersStore } from "@/store/filters-store";
import { Input } from "../ui/input";

export function ReposSearchInput(props: ComponentProps<"input">) {
  const { searchDraft, setSearchDraft, apllySearch } = filtersStore();

  return (
    <div className="relative w-full flex justify-between items-center">
      <Search className="absolute size-4 top-5 right-2 text-[#0587FF] md:left-1 xl:left-1 md:text-[#989898] xl:text-[#989898] md:top-2.5 xl:top-2.5" />
      <Input
        value={searchDraft}
        onChange={(param) => setSearchDraft(param.target.value)}
        onKeyDown={(event) => {
          if(event.key === 'Enter') apllySearch()
        }}
        placeholder="Search here"
        className="border-0 bg-[#F8F8F8] h-14 rounded-md md:bg-transparent xl:bg-transparent md:h-8.75 xl:h-8.75 md:rounded-none xl:rounded-none md:border-b xl:border-b pl-8 focus-visible:ring-0 focus-visible:border-gray-900 transition text-gray-900"
        {...props}
      />
    </div>
  );
}
