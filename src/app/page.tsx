"use client";

import { CardProfile } from "@/components/layout/card-profile";
import { ReposSearchInput } from "@/components/layout/repos-search-input";
import { ReposCardList } from "@/components/layout/repos-card-list";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { useGithubProfile } from "@/hooks/use-github-profile";
import { BookMarked, Star } from "lucide-react";

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
        <Tabs className="w-102 h-10">
          <TabsList className="w-full flex justify-between" variant="line">
            <TabsTrigger className="text-lg gap-3" value="repositories">
              <BookMarked size={24} />
              Repositories
              <div className="w-10 h-6 bg-[#F8F8F8] rounded-[59px] border border-[##DBDBDB] text-sm text-[#989898]">
                24
              </div>
            </TabsTrigger>
            <TabsTrigger className="text-lg gap-3" value="starred">
              <Star size={24} />
              Starred
              <div className="w-10 h-6 bg-[#F8F8F8] rounded-[59px] border border-[#DBDBDB] text-sm text-[#989898]">
                24
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="repositories">
            <ReposSearchInput />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
