import { GitFork } from "lucide-react";
import Link from "next/link";

interface IReposCardListProps {
  name: string;
  ownerName: string;
  description: string;
  language: string;
  forkCount: number;
}

export function ReposCardList(props: IReposCardListProps) {
  const { description, forkCount, language, name, ownerName } = props;

  const repoDetails = `/repository/${encodeURIComponent(ownerName)}/${encodeURIComponent(name)}`;

  return (
    <Link href={repoDetails}>
      <div className="flex flex-col gap-2.5 h-30.75 max-w-209.25 bg-transparent border-b border-[#F4F4F4]">
        <p className="text-[18px] font-light max-w-full truncate">
          <span className="truncate">
            {ownerName} /{" "}
            <span className="font-semibold text-[#0587FF] truncate">
              {name}
            </span>
          </span>
        </p>
        <p className="font-normal text-[#989898] text-sm">{description}</p>
        <div className="w-37 text-sm flex justify-between gap-6">
          <span>{language}</span>
          <span className="flex gap-2">
            <GitFork size={20} />
            {forkCount}
          </span>
        </div>
      </div>
    </Link>
  );
}
