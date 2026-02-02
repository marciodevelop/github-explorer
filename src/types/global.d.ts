declare namespace GithubTypes {
  type TypeRepoTypes = number | string | null;

  type TabsTypes = "repositories" | "starred";

  type BaseRepo = {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    owner: OwnerType;
  };

  type OwnerType = {
    login: string;
    avatar_url: string;
  };

  interface RepoSummary extends BaseRepo {
    user: User
    open_issues_count: number;
  };

  type Issue = {
    id: number;
    title: string;
    body: string | null;
    state: "open" | "closed";
    html_url: string;
    comments: number;
    created_at: string;
    updated_at: string;
    user: OwnerType;
  };

  type SocialAccount = {
    provider: string;
    url: string;
  };

  type User = {
    avatar_url: string;
    name: string | null;
    company: string | null;
    location: string | null;
    blog: string | null;
    social_accounts: any[];
    bio: string | null;
  };

  interface Repo extends BaseRepo {
    id: number;
    name: string;
    fullname: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    fork: boolean;
    language: string | null;
    update_at: string;
    owner: OwnerType;
  }
}
