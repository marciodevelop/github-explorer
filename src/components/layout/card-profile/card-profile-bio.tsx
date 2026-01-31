
interface ICardProfileBioProps {
  name: string
  bio: string
}

export function CardProfileBio(props: ICardProfileBioProps) {
  const { name, bio } = props;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#262626] text-xl font-bold">{name}</p>
      <span className="text-[#989898] text-sm text-center font-medium">{bio}</span>
    </div>
  )
}