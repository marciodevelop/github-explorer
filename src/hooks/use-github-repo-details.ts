import { getRepoDetails } from "@/services/github";
import { useAPIQuery } from "./use-api-query";

export function useGithubRepoDetails(username: string, repoName: string) {
  return useAPIQuery([`repos_details${username}/${repoName}`, username], () => getRepoDetails(username, repoName), { enabled: !!username })
}