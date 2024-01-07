import { TicketType } from "@/types/ticket";
import { create } from "zustand";
type Store = {
  openModal: boolean;
  roomId: number;
  setOpenModal: (openModal: boolean) => void;
  setRoomId: (roomId: number) => void;
  type: TicketType;
  setType: (type: TicketType) => void;
  content: "room" | "date" | "login";
  setContent: (content: "room" | "date" | "login") => void;
};

const useEventStore = create<Store>()((set) => ({
  openModal: false,
  roomId: -1,
  content: "room",
  setContent: (content) => set((state) => ({ ...state, content })),
  setRoomId: (roomId) => set((state) => ({ ...state, roomId })),
  setOpenModal: (openModal) => set((state) => ({ ...state, openModal })),
  type: "Regular",
  setType: (type) => set((state) => ({ ...state, type })),
}));

export default useEventStore;
