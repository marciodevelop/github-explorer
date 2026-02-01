import type { ReactNode } from 'react'

interface ICardProfileProps {
  children: ReactNode
}

export function CardProfileRoot({ children }: ICardProfileProps) {
  return <div className="flex flex-col gap-2 items-center max-w-full md:max-w-54.25 xl:max-w-62.75 ">{children}</div>
}