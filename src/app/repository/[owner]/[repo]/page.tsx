"use client"
import { useGithubRepoDetails } from "@/hooks/use-github-repo-details"
import { useParams } from "next/navigation"

type Params = { owner: string, repo: string }

export default function RepositoryDetailspage() {
  const { owner, repo } = useParams<Params>()

  const {data, isLoading, isError } = useGithubRepoDetails(owner, repo)

  if(isLoading) return <p>Carregando...</p>
  if(isError) return <p>erro ao carregar detalhes</p>


  return <section>{data.full_name} - {data.description}</section>
}