import axiosInstance from "@/axios";

type UserTicket = {
  id: number;
  senderId: number;
  receiverId: number;
  ticketId: number;
  ticketStatus: string;
};

type Response = {
  success: boolean;
  data: UserTicket[];
};

const getUsersTicket = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Tickets/GetUserTicket"
  );
  return data.data.filter((user) => user.ticketStatus !== "pending");
};

export default getUsersTicket;
