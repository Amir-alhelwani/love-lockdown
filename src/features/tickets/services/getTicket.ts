import axiosInstance from "@/axios";
import { Ticket } from "@/types/ticket";

type Response = {
  success: boolean;
  data: Ticket | null; 
};

const getTicket = async () => {
  const { data } = await axiosInstance.get<Response>("/api/Tickets/GetLastTicket");
  if(!data.data?.id) return null
  return data.data;
};

export default getTicket;
