import { getUserRepos } from "@/services/github";
import { useAPIQuery } from "./use-api-query";

export function useGihubRepos(username: string) {
  return useAPIQuery(["repos", username], () => getUserRepos(username), { enabled: !!username })
}