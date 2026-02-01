import { create } from 'zustand'

type TabsTypes = 'repositories' | 'starred'

type FilterStoreTypes = {
  activeTab: TabsTypes
  setSearch: (tab: TabsTypes) => void
}

export const filtersStore = create<FilterStoreTypes>((set, get) => ({
  activeTab: "repositories",
  setSearch: (activeTab) => set({ activeTab }),
}))