import { getUserStarredRepos } from "@/services/github";
import { useAPIQuery } from "./use-api-query";
import { filterRepos } from "@/features/repos/utils/filter-repos";
import { filtersStore } from '@/store/filters-store'

export function useGithubStarredRepos(username: string, options?: { enabled: boolean } ) {
  const { search, languages, types } = filtersStore()
  const query =  useAPIQuery(["starred", username], () => getUserStarredRepos(username), { enabled: !!username && options?.enabled })

  const filtered = filterRepos(query.data ?? [], { search, types, languages })

  return {...query, data: filtered}
}