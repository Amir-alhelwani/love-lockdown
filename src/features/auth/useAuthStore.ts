import { create } from "zustand";

type Store = {
  content: "login" | "register";
  direction: 1 | -1;
  openModal: boolean;
  setContent: (content: "login" | "register") => void;
  setDirection: (direction: 1 | -1) => void;
  setOpenModal: (openModal: boolean) => void;
};

const useAuthStore = create<Store>()((set) => ({
  content: "login",
  direction: 1,
  openModal: false,
  setContent: (content) => set((state) => ({ ...state, content })),
  setDirection: (direction) => set((state) => ({ ...state, direction })),
  setOpenModal: (openModal) => set((state) => ({ ...state, openModal })),
}));

export default useAuthStore;
