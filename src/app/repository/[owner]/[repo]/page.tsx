"use client";

import { CardProfile } from "@/components/card-profile";
import { useGithubRepoIssues } from "@/hooks/use-github-repo-issues";
import { repoSelectedStore } from "@/store/repo-selected-store";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Params = { owner: string; repo: string };

export default function RepositoryDetailspage() {
  const { owner, repo } = useParams<Params>();

  const { selectedRepo } = repoSelectedStore();
  const { data, isLoading, isError } = useGithubRepoIssues(owner, repo);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>erro ao carregar issues</p>;

  return (
    <section className="flex flex-col gap-6">
      {selectedRepo && (
        <>
          <div className="flex gap-8">
            <CardProfile.Root>
              <CardProfile.Avatar url={selectedRepo?.owner.avatar_url} />
            </CardProfile.Root>
            <div className="flex flex-col justify-center">
              <p className="text-3xl font-bold text-gray-600">
                {owner}/{repo}
              </p>
              {selectedRepo.description && (
                <p className="text-lg text-gray-500">
                  {selectedRepo.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex text-3xl gap-40 font-bold text-gray-600">
            <div className="flex flex-col">
              {selectedRepo.stargazers_count}
              <p className="text-lg text-gray-500 font-normal">Stars</p>
            </div>
            <div className="flex flex-col">
              {selectedRepo.forks_count}
              <p className="text-lg text-gray-500 font-normal">Forks</p>
            </div>
            <div className="flex flex-col">
              {selectedRepo.open_issues_count}
              <p className="text-lg text-gray-500 font-normal">
                Issues abertas
              </p>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col gap-3">
        {data ? (
          data.map((issue) => {
            const href = issue.html_url ?? issue.html_url;

            return (
              <Link
                href={href}
                target="_blank"
                key={issue.id}
                className="flex justify-between items-center hover:translate-x-1 transition cursor-pointer h-26 px-8 py-4 border border-gray-400 bg-white border-0.5 rounded-sm"
              >
                <div>
                  <p className="text-2xl font-bold text-gray-600">
                    {issue.title}
                  </p>
                  <p className="text-gray-500 font-normal">{issue.body}</p>
                </div>
                <ChevronRight size={18} />
              </Link>
            );
          })
        ) : (
          <p>Nenhuma issue aberta</p>
        )}
      </div>
    </section>
  );
}
