import { create } from "zustand";
import { User } from "./services/login";

type Store = {
  token: string;
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
};

const useUserStore = create<Store>()((set) => ({
  token: "",
  user: undefined,
  setUser: (user) => set((state) => ({ ...state, user })),
  setToken: (token) => set((state) => ({ ...state, token })),
  clearUser: () => set(() => ({ user: undefined, token: "" })),
}));

export default useUserStore;
