import { GitFork } from "lucide-react";

interface IReposCardListProps {
  name: string;
  ownerName: string;
  description: string;
  language: string;
  forkCount: number;
}

export function ReposCardList(props: IReposCardListProps) {
  const { description, forkCount, language, name, ownerName } = props;

  return (
    <div className="flex flex-col gap-2.5 h-30.75 w-209.25 bg-transparent border-b border-[#F4F4F4]">
      <p className="text-[18px] font-light truncate">
        {ownerName} /{" "}
        <span className="font-semibold text-[#0587FF]">{name}</span>
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
  );
}
