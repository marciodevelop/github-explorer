interface IFilterParams {
  search: string;
  languages: string[];
  types: string[];
}

const normalizeString = (param: string): string =>
  param.trim().toLocaleLowerCase();

const createTypesPrecates = () => ({
  forks: (repo: GithubTypes.IRepo) => repo.fork,
  sources: (repo: GithubTypes.IRepo) => !repo.fork,
  archived: (repo: GithubTypes.IRepo) => repo.archived,
  mirrors: (repo: GithubTypes.IRepo) => Boolean(repo.mirror_url),
});

export const filterRepos = (
  repos: GithubTypes.IRepo[],
  params: IFilterParams,
) => {
  const { search, languages, types } = params;

  const normalizedSearch = normalizeString(search);
  const normalizedLanguages = new Set(languages.map(normalizeString));
  const typePredicates = createTypesPrecates();

  return repos.filter((repo) => {
    if (normalizedSearch) {
      const repoForName = normalizeString(repo.name ?? "");

      if (!repoForName.includes(normalizedSearch)) return false;
    }

    if (normalizedLanguages.size > 0) {
      const repoForLanguge = normalizeString(repo.language ?? "");

      if (!repoForLanguge || !normalizedLanguages.has(repoForLanguge)) {
        return false;
      }
    }

    if (types.length > 0) {
      const matchAnyType = types.some((type) => {
        const predicate = typePredicates[type as keyof typeof typePredicates];
        return predicate ? predicate(repo) : false;
      });

      if (!matchAnyType) return false;
    }

    return true;
  });
};
