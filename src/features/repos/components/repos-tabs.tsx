import { BookMarked, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReposToobar } from "./repos-toolbar";
import { ReposCounterBadge } from "./repos-counter-badge";
import { useGithubRepos } from "@/hooks/use-github-repos";
import { useGithubStarredRepos } from "@/hooks/use-github-starred-repos";
import { ReposCardList } from "@/components/layout/repos-card-list";
import { EmptyState } from "@/components/layout/empty-state";
import { tabsColtrolStore } from "@/store/tabs-control-store";

export function ReposTabs() {
  const { activeTab, setActiveTab } = tabsColtrolStore();
  const { data, isLoading } = useGithubRepos("marciodevelop");
  const { data: starredData, isLoading: isLoadingStarred } =
    useGithubStarredRepos("marciodevelop", {
      enabled: activeTab === "starred",
    });

  const hasData = data.length > 0;
  const hasDataStarred = starredData.length > 0;

  if (isLoading && isLoadingStarred) return <p>Carregando...</p>;

  return (
    <Tabs
      defaultValue={activeTab}
      className="w-full"
      onValueChange={(tab) => setActiveTab(tab as GithubTypes.TabsTypes)}
    >
      <TabsList
        className="w-full flex justify-center md:justify-start"
        variant="line"
      >
        <TabsTrigger
          className="text-lg gap-3 max-w-49 h-10"
          value="repositories"
          disabled={!hasData}
        >
          <BookMarked size={24} />
          Repositories
          <ReposCounterBadge total={data.length} />
        </TabsTrigger>
        <TabsTrigger
          disabled={!hasData}
          className="text-lg gap-3 max-w-49 h-10"
          value="starred"
        >
          <Star size={24} />
          Starred
          <ReposCounterBadge total={starredData.length} />
        </TabsTrigger>
      </TabsList>
      <ReposToobar />
      <TabsContent className="w-full" value="repositories">
        {hasData ? (
          <div className="flex flex-col gap-10 mt-5">
            {data.map((repo) => (
              <ReposCardList key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <EmptyState message="Nenhum dado foi encontrado" description="" />
        )}
      </TabsContent>
      <TabsContent className="w-full" value="starred">
        {hasDataStarred ? (
          <div className="flex flex-col gap-10 mt-5">
            {starredData.map((repo) => (
              <ReposCardList key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <EmptyState message="Nenhum dado foi encontrado" description="" />
        )}
      </TabsContent>
    </Tabs>
  );
}
