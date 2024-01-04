import axiosInstance from "@/axios";
import { SmartTicket } from "@/types/ticket";

type Response = {
  success: boolean;
  message?: string;
  data: SmartTicket[] | SmartTicket;
};

const getSmartMatching = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Matching/GetMatchingUsers"
  );
  if (data?.message) {
    const returnData = data.data as SmartTicket;
    return [returnData];
  }
  return data.data;
};

export default getSmartMatching;
