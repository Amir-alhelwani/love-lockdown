import axiosInstance from "@/axios";
import { TicketType } from "@/types/ticket";

type Body = {
  bookingDate: string;
  roomId: number;
  type: TicketType;
};

const createTicket = async (body: Body) => {
  await axiosInstance.post("/api/Tickets/CreateTicket", body);
};

export default createTicket;
