import { ReposSearchInput } from "@/components/layout/repos-search-input";
import { ReposFilters } from "./repos-filters";


export function ReposToobar() {
  return (
    <div className='flex justify-between gap-10'>
      <div className="w-full max-w-111">
        <ReposSearchInput />
      </div>
      <ReposFilters/>
    </div>
  );
}
