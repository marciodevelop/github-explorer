import { getUser, getUserSocialAccounts } from "@/services/github";
import { useAPIQuery } from "./use-api-query";

export type UseGithubProfileData = GithubTypes.User & {
  social_accounts: GithubTypes.SocialAccount[]
}

export function useGithubProfile(username: string) {
  return useAPIQuery<UseGithubProfileData>(
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
