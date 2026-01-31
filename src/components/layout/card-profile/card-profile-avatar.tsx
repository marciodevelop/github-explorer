import { User } from 'lucide-react'
import Image from 'next/image'

interface ICardProfileAvatarProps {
  url: string
}

export function CardProfileAvatar({ url }: ICardProfileAvatarProps) {
  return (
    <div className="flex items-center justify-center size-26 xl:size-37.5 bg-white/10 rounded-full shadow-inner shadow-black/70 overflow-hidden">
      {url ? <Image alt="imagem do avatar do perfil" width="150" height={150} src={url} /> : <User color='gray' size={40} />}
    </div>
  )
}