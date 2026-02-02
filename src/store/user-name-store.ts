import { create } from 'zustand'

type UserNameTypes = {
  userName: string
  setUserName: (tab: string) => void
}

export const userNameStore = create<UserNameTypes>((set) => ({
  userName: "",
  setUserName: (userName) => set({ userName }),
}))