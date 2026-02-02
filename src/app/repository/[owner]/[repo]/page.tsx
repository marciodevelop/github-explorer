"use client";
import { CardProfile } from "@/components/layout/card-profile";
import { useGithubRepoIssues } from "@/hooks/use-github-repo-details";
import { useParams } from "next/navigation";

type Params = { owner: string; repo: string };

export default function RepositoryDetailspage() {
  const { owner, repo } = useParams<Params>();

  const { data, isLoading, isError } = useGithubRepoIssues(owner, repo);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>erro ao carregar detalhes</p>;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-8">
        <CardProfile.Root>
          <CardProfile.Avatar url={data.avatar_url} />
        </CardProfile.Root>
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-bold text-gray-600">
            {owner}/{repo}
          </p>
          {data.description && (
            <p className="text-lg text-gray-500">{data.description}</p>
          )}
        </div>
      </div>
      <div className="flex text-3xl gap-40 font-bold text-gray-600">
        <div className="flex flex-col">
          {data.stargazers_count}
          <p className="text-lg text-gray-500 font-normal">Stars</p>
        </div>
        <div className="flex flex-col">
          {data.forks_count}
          <p className="text-lg text-gray-500 font-normal">Forks</p>
        </div>
        <div className="flex flex-col">
          {data.open_issues_count}
          <p className="text-lg text-gray-500 font-normal">Issues abertas</p>
        </div>
      </div>
      {data.issue.map()}
      <div className=""></div>
    </section>
  );
}
