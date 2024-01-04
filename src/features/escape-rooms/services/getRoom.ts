import axiosInstance from "@/axios";
import { GetRooms } from "@/types/escapeRooms";

type Response = {
  success: boolean;
  data: GetRooms[];
};

const getRoom = async (id: number) => {
  const { data } = await axiosInstance.get<Response>("/api/Rooms/GetRooms");
  const room = data.data.find((room) => room.room.id === id);
  if (!room) {
    return;
  }
  return room;
};

export default getRoom;
