interface IReposCounterbadgeProps {
  total: number | string;
}

export function ReposCounterBadge({ total = 0 }: IReposCounterbadgeProps) {
  return (
    <div className="w-10 h-6 bg-[#F8F8F8] rounded-[59px] border border-[#DBDBDB] text-sm text-[#989898]">
      {total}
    </div>
  );
}
