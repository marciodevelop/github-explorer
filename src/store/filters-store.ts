import { create } from 'zustand'

type FilterStoreTypes = {
  search: string
  type: GithubTypes.TypeRepoTypes
  language: string | null
  setSearch: (search: string) => void
  setType: (value: GithubTypes.TypeRepoTypes) => void
  setlanguage: (language: string | null) => void
  resetFilter: () => void
  setUrlParams: (data: Partial<FilterStoreTypes>) => void
}

export const filtersStore = create<FilterStoreTypes>((set, _) => ({
  search: "",
  type: null,
  language: null,

  setSearch: (search) => set({ search }),
  setType: (type) => set({ type }),
  setlanguage: (language) => set({ language }),

  setUrlParams: (data) => set(data),

  resetFilter: () => set({
    search: "",
    type: null,
    language: null
  })
}))