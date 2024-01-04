import { create } from "zustand";

type Content =
  | "start"
  | "basic"
  | "personalBelieves"
  | "freeTime"
  | "bodyType"
  | "musicGenres";

type Store = {
  content: Content;
  direction: 1 | -1;
  setContent: (content: Content) => void;
  setDirection: (direction: 1 | -1) => void;
};

const usePartnerPreferencesStore = create<Store>()((set) => ({
  content: "start",
  direction: 1,
  setContent: (content) => set((state) => ({ ...state, content })),
  setDirection: (direction) => set((state) => ({ ...state, direction })),
}));

export default usePartnerPreferencesStore;
