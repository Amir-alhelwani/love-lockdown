import { TicketType } from "@/types/ticket";
import { create } from "zustand";
type Store = {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  type: TicketType;
  setType: (type: TicketType) => void;
};

const useTicketStore = create<Store>()((set) => ({
  openModal: false,
  setOpenModal: (openModal) => set((state) => ({ ...state, openModal })),
  type: "Regular",
  setType: (type) => set((state) => ({ ...state, type })),
}));

export default useTicketStore;
