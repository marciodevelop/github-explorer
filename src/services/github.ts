const BASE_URL = "https://api.github.com";

async function handleReponse<T>(response: Response): Promise<T> {
  if (!response.ok) throw new Error(`error ${response.status}`);

  return response.json();
}

export async function getUser(username: string): Promise<GithubTypes.User> {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  return handleReponse<GithubTypes.User>(response);
}

export async function getUserSocialAccounts(
  username: string,
): Promise<GithubTypes.SocialAccount[]> {
  const response = await fetch(`${BASE_URL}/users/${username}/social_accounts`);

  return handleReponse<GithubTypes.SocialAccount[]>(response);
}

export async function getUserRepos(
  username: string,
): Promise<GithubTypes.Repo[]> {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100`,
  );

  return handleReponse<GithubTypes.Repo[]>(response);
}

export async function getUserStarredRepos(
  username: string,
): Promise<GithubTypes.Repo[]> {
  const response = await fetch(
    `${BASE_URL}/users/${username}/starred?per_page=100`,
  );

  return handleReponse<GithubTypes.Repo[]>(response);
}

export async function getRepoIssues(
  owner: string,
  repoName: string
): Promise<GithubTypes.Repo[]> {
  const response = await fetch(`${BASE_URL}/repos/${owner}/${repoName}/issues`);

  return handleReponse<GithubTypes.Repo[]>(response);
}
