import { ReposSearchInput } from "@/components/layout/repos-search-input";
import { ReposFilters } from "./repos-filters";


export function ReposToobar() {
  return (
    <div className='relative flex flex-col-reverse justify-between mt-2 gap-10 md:mt-12 xl:mt-12 xl:flex-row'>
      <div className="w-full max-w-111">
        <ReposSearchInput />
      </div>
      <ReposFilters/>
    </div>
  );
}
