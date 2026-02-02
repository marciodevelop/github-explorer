import { create } from "zustand";

type FilterStoreTypes = {
  search: string;
  searchDraft: string;
  types: string[];
  languages: string[];
  setSearch: (search: string) => void;
  setSearchDraft: (searchDraft: string) => void;
  setTypes: (types: string[]) => void;
  setLanguages: (language: string[]) => void;
  apllySearch: () => void;
  resetFilter: () => void;
};

export const filtersStore = create<FilterStoreTypes>((set) => ({
  search: "",
  searchDraft: "",
  types: [],
  languages: [],

  setSearch: (search) => set({ search }),
  setSearchDraft: (searchDraft) => set({ searchDraft }),
  setTypes: (types) => set({ types }),
  setLanguages: (languages) => set({ languages }),

  apllySearch: () => set(({ searchDraft }) => ({ search: searchDraft })),
  resetFilter: () =>
    set({
      search: "",
      types: [],
      languages: [],
    }),
}));
