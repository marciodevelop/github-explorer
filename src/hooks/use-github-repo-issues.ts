import { getRepoIssues } from "@/services/github";
import { useAPIQuery } from "./use-api-query";



export function useGithubRepoIssues(username: string, repoName: string) {
  return useAPIQuery([`repos_issues${username}/${repoName}`, username], () => getRepoIssues(username, repoName), { enabled: !!username })
}