import { BookMarked, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReposToobar } from "./repos-toolbar";
import { ReposCounterBadge } from "./repos-counter-badge";

interface IRepoTabsprops {}

export function ReposTabs() {
  return (
    <Tabs defaultValue="repositories" className="w-full">
      <TabsList className="w-full flex justify-start" variant="line">
        <TabsTrigger
          className="text-lg gap-3 max-w-49 h-10"
          value="repositories"
        >
          <BookMarked size={24} />
          Repositories
          <ReposCounterBadge total={3} />
        </TabsTrigger>
        <TabsTrigger className="text-lg gap-3 max-w-49 h-10" value="starred">
          <Star size={24} />
          Starred
          <ReposCounterBadge total={5} />
        </TabsTrigger>
      </TabsList>
      <TabsContent className="w-full" value="repositories">
        <ReposToobar />
      </TabsContent>
    </Tabs>
  );
}
