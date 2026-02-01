import { create } from 'zustand'

type FilterStoreType = {
  search: string
  setSearch: (search: string) => void
}

export const filtersStore = create<FilterStoreType>((set, get) => ({
  search: "",
  setSearch: (search: string) => set({ search })
}))