"use client"

import { filtersStore } from "@/store/filters-store"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const buildQueryParams = (params: any) => {
 const urlParams = new URLSearchParams()

 Object.entries(params).forEach(([key, value]) => {
  if(value !== null && value !== "" && value !== undefined) {
    urlParams.set(key, String(value))
  }
 })

 return urlParams.toString()
}

export function useUrlFilter() {
  const { replace } = useRouter()
  const searchParams = useSearchParams() 

  const { setUrlParams, language, search, type } = filtersStore()

  useEffect(() => {
    setUrlParams({
      search: searchParams.get('search') ?? '',
      language: searchParams.get('language'),
      type: searchParams.get('type') as GithubTypes.TypeRepoTypes,
    })
  }, [searchParams, setUrlParams])

  useEffect(() => {
    const queryString = buildQueryParams({
      search,
      language,
      type,
    })

    const currentParams = searchParams.toString()

    if(currentParams !== queryString) {
      replace(`?${queryString}`, { scroll: false })
    }
  }, [language, search, type, replace, searchParams])
}