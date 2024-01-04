import axiosInstance from "@/axios";
import { GetRooms } from "@/types/escapeRooms";

type Response = {
  success: boolean;
  data: GetRooms[];
};

const getRooms = async () => {
  const { data } = await axiosInstance.get<Response>("/api/Rooms/GetRooms");
  return data.data;
};

export default getRooms;
