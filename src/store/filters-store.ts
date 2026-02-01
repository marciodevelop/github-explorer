import { create } from 'zustand'

type FilterStoreTypes = {
  search: string
  types: string[],
  languages: string[]
  setSearch: (search: string) => void
  setTypes: (types: string[]) => void
  setLanguages: (language: string[]) => void
  resetFilter: () => void
}

export const filtersStore = create<FilterStoreTypes>((set) => ({
  search: "",
  types: [],
  languages: [],

  setSearch: (search) => set({ search }),
  setTypes: (types) => set({ types }),
  setLanguages: (languages) => set({ languages }),

  resetFilter: () => set({
    search: "",
    types: [],
    languages: []
  })
}))