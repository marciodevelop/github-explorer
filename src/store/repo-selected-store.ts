import { create } from 'zustand'

type RepoSelectedType = {
  selectedRepo: GithubTypes.RepoSummary | null
  setSelectedRepo: (repo: GithubTypes.RepoSummary) => void
  clearSelectedRepo: () => void
}

export const repoSelectedStore = create<RepoSelectedType>((set) => ({
  selectedRepo: null,
  setSelectedRepo: (selectedRepo) => set({ selectedRepo }),

  clearSelectedRepo: () => set({ selectedRepo: null })
}))