import { create } from 'zustand'

type FilterStoreTypes = {
  activeTab: GithubTypes.TabsTypes
  setActiveTab: (tab: GithubTypes.TabsTypes) => void
}

export const tabsColtrolStore = create<FilterStoreTypes>((set) => ({
  activeTab: "repositories",
  setActiveTab: (activeTab) => set({ activeTab }),
}))