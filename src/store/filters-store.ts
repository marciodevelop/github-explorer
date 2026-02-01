import { create } from 'zustand'

type RepoTypes = "all" | 'sources' | "forks" | "archived" | "mirros" | null

type FilterStoreTypes = {
  search: string
  type: RepoTypes
  language: string | null
  setSearch: (search: string) => void
  setType: (value: RepoTypes) => void
  setlanguage: (language: string | null) => void
  resetFilter: () => void
}

export const filtersStore = create<FilterStoreTypes>((set, get) => ({
  search: "",
  type: null,
  language: null,

  setSearch: (search) => set({ search }),
  setType: (type) => set({ type }),
  setlanguage: (language) => set({ language }),

  resetFilter: () => set({
    search: "",
    type: null,
    language: null
  })
}))