import { create } from 'zustand'

type TabsTypes = 'repositories' | 'starred'

type FilterStoreTypes = {
  activeTab: TabsTypes
  setActiveTab: (tab: TabsTypes) => void
}

export const tabsColtrolStore = create<FilterStoreTypes>((set, get) => ({
  activeTab: "repositories",
  setActiveTab: (activeTab) => set({ activeTab }),
}))