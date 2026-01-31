import { getUser, getUserSocialAccounts } from "@/services/github";
import { useAPIQuery } from "./use-api-query";

export function useGithubProfile(username: string) {
  return useAPIQuery(
    ["github_profile", username],
    async () => {
      const [profile, socials] = await Promise.all([
        getUser(username),
        getUserSocialAccounts(username),
      ]);

      return {
        ...profile,
        social_accounts: socials,
      };
    },
    { enabled: !!username },
  );
}
