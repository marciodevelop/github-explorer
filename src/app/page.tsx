"use client";

import { CardProfile } from "@/components/layout/card-profile";
import { ReposCardList } from "@/components/layout/repos-card-list";
import { useGithubProfile } from "@/hooks/use-github-profile";

export default function Home() {
  const { data, isLoading, isError } = useGithubProfile("marciodevelop");

  if (isLoading) return <p>Carregando dados...</p>;
  if (isError) return <p>Error ao carregar dados!</p>;

  return (
    <div>
    <CardProfile.Root>
      <CardProfile.Avatar url={data.avatar_url} />
      <CardProfile.Bio name={data.name} bio={data.bio} />
      <CardProfile.Infos
        company={data.company}
        location={data.location}
        blog={data.blog}
        socials={data.social_accounts}
      />
    </CardProfile.Root>
    <ReposCardList />
    </div>
  );
}
