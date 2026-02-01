"use client";

import { CardProfile } from "@/components/layout/card-profile";
import { ReposTabs } from "@/features/repos/components/repos-tabs";
import { useGithubProfile } from "@/hooks/use-github-profile";

export default function Home() {
  const { data, isLoading, isError } = useGithubProfile("marciodevelop");

  if (isLoading) return <p>Carregando dados...</p>;
  if (isError) return <p>Error ao carregar dados!</p>;

  return (
    <section className="flex flex-col items-center gap-10 md:gap-30 xl:gap-30 xl:flex-row md:flex-row xl:items-start md:items-start">
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
      <div className="flex w-full justify-center md:justify-start xl:justify-start">
        <ReposTabs />
      </div>
    </section>
  );
}
